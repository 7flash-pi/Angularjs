import { Component, OnInit } from '@angular/core';

import { Question } from '../question.model';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {
  
  question:Question[];
  showInfo:boolean=false;
  constructor( private questionServie:QuestionService) { }

  ngOnInit(): void {
    this.question=this.questionServie.question;
  }

  setShowInfo(id:number){
    this.showInfo= !this.showInfo;
  }

}
