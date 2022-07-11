import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
