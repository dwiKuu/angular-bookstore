import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/services/book-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:BookDetailsService) { }
  nameKategori: any;
  ngOnInit(): void {
      this.nameKategori = this.service.bookKategori;
  }

}
