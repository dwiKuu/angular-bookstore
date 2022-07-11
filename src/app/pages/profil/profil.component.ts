import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/services/book-details.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  detailProfil: any;
  constructor(private service: BookDetailsService) { }
  books: any;
  ngOnInit(): void {
    this.detailProfil = this.service.profileData;
    this.books = this.service.Order;
  }

}
