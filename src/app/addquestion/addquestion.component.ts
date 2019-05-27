import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  getTopic:{}
  public topicId:number;
  constructor(private quizService:QuizService,private route:Router) { }

  ngOnInit() {
    this.quizService.getAllTopics().subscribe(
      data=>this.getTopic=data
    );
  }

  public topicChange(event):void{
    this.topicId = event.target.value;
   // console.log(this.topicId);
  }

  OnSubmit(question:string,option1:string,option2:string,option3:string,option4:string,answer:string){   
    //console.log(this.topicId);    
    //console.log("add question");
    this.quizService.addQuestion(question,option1,option2,option3,option4,answer,this.topicId).subscribe(
      (data:any)=>{
        localStorage.clear();
        localStorage.setItem('user',JSON.stringify(data)); 
        //this.route.navigate(['/login']);
      }
    );
  }
}
