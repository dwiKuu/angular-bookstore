import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailsService } from 'src/app/services/book-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-buku',
  templateUrl: './detail-buku.component.html',
  styleUrls: ['./detail-buku.component.css']
})
export class DetailBukuComponent implements OnInit {

  constructor(private param:ActivatedRoute, private Service: BookDetailsService, private router:Router) { }
  getDetailId: any;
  detailData: any;
  comment = "";
  postComment = [""] ;
  user: any;
  inputNumber = 0;
  books:any;
  ngOnInit(): void {
    this.books = this.Service.bookDetails;
    this.getDetailId = this.param.snapshot.paramMap.get('id');
    console.log(this.getDetailId,'getDetail');
    if(this.getDetailId)
    {
      this.detailData = this.Service.bookDetails.filter((value)=>{
        return value.id == this.getDetailId;
      });
      console.log(this.detailData,'detailData>>');
    }
  }

  post() {
    this.postComment.push(this.comment);
    this.comment = "";
  }

  userName() {
    this.user = this.Service.profileData;
  }

  plus() {
    this.inputNumber = this.inputNumber+1;
  }
  minus() {
    if(this.inputNumber !=0){
      this.inputNumber = this.inputNumber-1;
    }
  }


}
