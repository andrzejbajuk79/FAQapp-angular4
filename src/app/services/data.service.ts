import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {
 questions :Question[];
  constructor() {}

//Get questions from localstorage
getQuestions(){
  if(localStorage.getItem("questions")===null){
    this.questions =[];
  }else{
    this.questions = JSON.parse(localStorage.getItem("questions"));
  }
  return this.questions;
}

//Add questions to LS
addQuestion(question:Question){
  debugger;
   this.questions.unshift(question) ;
//Init local var
  let questions;
  if(localStorage.getItem("questions")===null){
    questions =[];
  // Push new question
  questions.unshift(question);
  // Set new arra to LS
  localStorage.setItem("questions",JSON.stringify(questions));

  }else{
    question = JSON.parse(localStorage.getItem('questions'));
    // Add  new question
    questions.unshift(question);
    // REset LS
    localStorage.setItem('questions',JSON.stringify(questions))
  }
}
//Remove questions from LS
delQuestion(question:Question){
  for(let i=0;i<this.questions.length;i++){
    if(question == this.questions[i]){
      this.questions.splice(i,1);
      localStorage.setItem('questions',JSON.stringify(this.questions));
    }
  }
}
}
