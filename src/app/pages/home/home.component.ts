import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/services/book-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookData: any;
  constructor(private service: BookDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.bookData = this.service.bookDetails;
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
