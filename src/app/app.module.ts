import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { DetailBukuComponent } from './pages/detail-buku/detail-buku.component';
import { BooksComponent } from './pages/books/books.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KategoriComponent } from './pages/kategori/kategori.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { PopularBookComponent } from './pages/popular-book/popular-book.component';
import { PreOrderComponent } from './pages/pre-order/pre-order.component';
import { DetailKategoriComponent } from './pages/detail-kategori/detail-kategori.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProfilComponent,
    DetailBukuComponent,
    BooksComponent,
    NotificationComponent,
    ContactComponent,
    KategoriComponent,
    NewBookComponent,
    PopularBookComponent,
    PreOrderComponent,
    DetailKategoriComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
