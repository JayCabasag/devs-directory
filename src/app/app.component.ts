import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeRoute = '';
  menuItems = ['Dashboard', 'Developers', 'Account'];
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        this.activeRoute = data.url
      }
    })
  }
}
