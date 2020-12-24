import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsPageComponent } from './students-page/students-page.component'
import { AddstudentComponent } from './addstudent/addstudent.component'
const routes: Routes = [
  { path : 'students', component:StudentsPageComponent},
  { path : 'addstudents', component:AddstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  