import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddGuestComponent } from './guests/add-guest/add-guest.component';
import { EditGuestComponent } from './guests/edit-guest/edit-guest.component';
import { ListGuestComponent } from './guests/list-guest/list-guest.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guests', component: ListGuestComponent },
  { path: 'guests/create', component: AddGuestComponent },
  { path: 'guests/edit/:id', component: EditGuestComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
