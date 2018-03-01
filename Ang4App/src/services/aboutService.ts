import {Injectable} from '@angular/core';

@Injectable()
export class AboutService{
  info= {
    nom: "Kodjane",
    email: "kodjane09@hotmail.com",
    tel: '0471352401'
  };

  comments=[
    {date:new Date(),message:"A"},
    {date:new Date(),message:"B"},
    {date:new Date(),message:"C"}
  ];

  addComment(c){
    c.date = new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }

  getInfo(){
    return this.info;
  }
}
