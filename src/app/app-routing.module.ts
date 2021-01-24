import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AdminComponent} from "./admin/admin.component";
import {FansComponent} from "./fans/fans.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {NewsComponent} from "./news/news.component";
import {CalendarComponent} from "./calendar/calendar.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'fans', component: FansComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'calendar', component: CalendarComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
