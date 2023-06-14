import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  suggestions: string[] = [];
  hasSugggestions: boolean = this.suggestions.length > 0;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.suggestions = ['Option 1', 'Option 2', 'Option 3']
    this.hasSugggestions = true
  }

  searchForm = this.formBuilder.group({
    term: ['']
  })

  onBlurSearch(): void {
    console.log(this.searchForm.value?.term)
    this.suggestions = []
    this.hasSugggestions = false
  }

  onFocusSearch(): void {
    console.log(this.searchForm.value?.term)
    this.suggestions = ['Option 1', 'Option 2', 'Option 3']
    this.hasSugggestions = true
  }

  onSuggestionClick(suggestion: string): void {
    this.searchForm.patchValue({ term: suggestion })
    console.log(this.searchForm.value?.term)
  }

  onSearch(): void {
    console.log(this.searchForm.value?.term)
    this.suggestions = []
    this.hasSugggestions = false
  }

}
