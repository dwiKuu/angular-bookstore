import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/services/book-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-book',
  templateUrl: './popular-book.component.html',
  styleUrls: ['./popular-book.component.css']
})
export class PopularBookComponent implements OnInit {

  constructor(private service: BookDetailsService, private router:Router) { }
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
