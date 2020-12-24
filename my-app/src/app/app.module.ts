import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HttpClientModule } from '@angular/common/http';
import {  MatPaginatorModule } from '@angular/material/paginator';
import {  MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentServicesService } from './student-services.service';
@NgModule({
  declarations: [
    AppComponent,
    StudentsPageComponent,
    AddstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    StudentServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
