import { Component, OnInit } from '@angular/core';
import { BookDetailsService } from 'src/app/services/book-details.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-kategori',
  templateUrl: './detail-kategori.component.html',
  styleUrls: ['./detail-kategori.component.css']
})
export class DetailKategoriComponent implements OnInit {

  constructor(private param:ActivatedRoute, private router: Router, private _bookDetailService: BookDetailsService) { }
  books: any;
  nameKategori: any;
  detailData: any;
  getDetailId: any;
  ngOnInit(): void {
    this.books = this._bookDetailService.bookDetails;
    this.nameKategori = this._bookDetailService.bookKategori;
    this.getDetailId = this.param.snapshot.paramMap.get('id');
    console.log(this.getDetailId,'getDetail');
    if(this.getDetailId)
    {
      this.detailData = this._bookDetailService.bookKategori.filter((value)=>{
        return value.id == this.getDetailId;
      });
      console.log(this.detailData,'detailData>>');
    }
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
