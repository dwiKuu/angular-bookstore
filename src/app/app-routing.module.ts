import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBukuComponent } from './pages/detail-buku/detail-buku.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { BooksComponent } from './pages/books/books.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KategoriComponent } from './pages/kategori/kategori.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { PopularBookComponent } from './pages/popular-book/popular-book.component';
import { PreOrderComponent } from './pages/pre-order/pre-order.component';
import { DetailKategoriComponent } from './pages/detail-kategori/detail-kategori.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'books', component: BooksComponent},
  {path:'contact', component: ContactComponent},
  {path:'notification', component: NotificationComponent},
  {path:'detail/:id',component: DetailBukuComponent},
  {path:'profil',component: ProfilComponent},
  {path:'kategori',component: KategoriComponent},
  {path:'newBook',component:NewBookComponent},
  {path:'popularBook',component:PopularBookComponent},
  {path:'preOrder',component:PreOrderComponent},
  {path:'kategori/:id',component:DetailKategoriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }