import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/gettingstarted/gettingstarted.component';

import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {ListBookComponent} from './content/list-book/list-book.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CreateBookComponent} from './content/create-book/create-book.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {BookDetailComponent} from './content/book-detail/book-detail.component';
import {EditBookComponent} from './content/edit-book/edit-book.component';
import { DialogComponent } from './content/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: {title: 'Getting Started'}
  },
  {
    path: `listBook`,
    component: ListBookComponent
  },
  {
    path: `createBook`,
    component: CreateBookComponent
  },
  {
    path: `bookDetail/:id`,
    component: BookDetailComponent
  },
  {
    path: `update-book/:id`,
    component: EditBookComponent,
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, ListBookComponent, CreateBookComponent, BookDetailComponent, EditBookComponent, DialogComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    RouterModule.forRoot(appRoutes, {useHash: false}), MatTableModule, MatPaginatorModule, MatFormFieldModule, FormsModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
