import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GalleryService{
  constructor(private http:HttpClient){

  }

  search(motCle:string, size:number, page:number){
   return this.http.get("https://pixabay.com/api/?key=8142784-6f847d088def54953e7e4ba9b&q="
      +motCle+"&per_page="+size+"&page="+page);
  }
}
