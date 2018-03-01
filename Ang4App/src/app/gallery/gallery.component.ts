import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GalleryService} from '../../services/galleryService';
import {error} from 'util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos: any;
  currentPage = 1;
  size = 10;
  pages: Array<number>=[];
  totalPages = 0;
  motCle: string;
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
  }

  onSearch(dataForm){
    this.galleryService.search(dataForm.motCle,this.size,this.currentPage)
      .subscribe(data => {
      this.pagePhotos = data;
      this.totalPages = data.totalHits/this.size;
        console.log(data.totalHits);
        if(data.totalHits % this.size != 0){
        this.totalPages++;
      }err=>{
          console.log(err);
        }

      this.pages = new Array(this.totalPages);
    });
  }


  goToPage(i){
    this.currentPage = i+1;
    this.onSearch({motCle: this.motCle});
  }

}
