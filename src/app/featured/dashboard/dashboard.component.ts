import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { OnInit } from '@angular/core';
import { Developer } from 'src/app/core/models/developer.model';
import { DevelopersService } from 'src/app/core/services/developers.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  suggestions$!: Observable<Developer[]>;
  hasSuggestions: boolean = false;

  private searchTerms = new Subject<string>();
  onSearch(term: string): void {
    this.searchTerms.next(term);
  }

  developers: Developer[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private developersService: DevelopersService
  ) { }

  ngOnInit(): void {
    this.developersService.getAll().subscribe((developers: Developer[]) => {
      this.developers = developers
    })
    this.suggestions$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(500),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.developersService.searchDeveloper(term)),
    );
    this.suggestions$.subscribe((suggestions: Developer[]) => {
      this.hasSuggestions = suggestions.length > 0
    })
  }

  searchForm = this.formBuilder.group({
    term: ['']
  })

  onSuggestionClick(suggestion: string): void {
    this.searchForm.patchValue({ term: suggestion })
    console.log(this.searchForm.value?.term)
  }

  onSearchBlur(): void {
    this.hasSuggestions = false
  }
}