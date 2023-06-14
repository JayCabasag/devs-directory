import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { DashboardComponent } from './featured/dashboard/dashboard.component';
import { DevelopersComponent } from './featured/developers/developers.component';
import { AccountComponent } from './featured/account/account.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'developers', component: DevelopersComponent },
  { path: 'account', component: AccountComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
