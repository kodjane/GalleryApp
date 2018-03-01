import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/aboutService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info: any;
  comments=[];
  commentaire = {date : new Date(), message: ""};

  constructor(private aboutService: AboutService){
    this.info = this.aboutService.getInfo();
    this.comments = this.aboutService.getAllComments();
  }

  ngOnInit() {
  }
  onAddCommentaire(c){
    this.aboutService.addComment(c);
    this.commentaire.message="";
    this.comments = this.aboutService.getAllComments();
  }

}
