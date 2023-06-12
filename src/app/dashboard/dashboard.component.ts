import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private formBuilder: FormBuilder) { }
  searchForm = this.formBuilder.group({
    term: ['']
  })
  onSearch(): void {
    console.log(this.searchForm.value?.term)
    this.searchForm.reset()
  }
}
