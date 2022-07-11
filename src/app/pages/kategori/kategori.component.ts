import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/services/book-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {

  constructor(private router: Router, private service:BookDetailsService) { }
  books: any;
  nameKategori: any;
  ngOnInit(): void {
    this.books = this.service.bookDetails;
    this.nameKategori = this.service.bookKategori;
  }

  goToKategori(pagesName:string): void{
    this.router.navigate([`${pagesName}`]);
  }

  goToNewBook(pagesName:string): void{
    this.router.navigate([`${pagesName}`]);
  }

  goToPopularBook(pagesName:string): void{
    this.router.navigate([`${pagesName}`]);
  }

  goToPreOrder(pagesName:string): void{
    this.router.navigate([`${pagesName}`]);
  }

}
