import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { StudenthomeComponent } from '../studenthome/studenthome.component';

@Component({
  selector: 'app-selecttesttopic',
  templateUrl: './selecttesttopic.component.html',
  styleUrls: ['./selecttesttopic.component.css']
})
export class SelecttesttopicComponent implements OnInit {

  getTopic:{}
  public topicId:number;

  constructor(private quizService:QuizService,private route:Router,private student:StudenthomeComponent) { }

  ngOnInit() {
    // this.quizService.getUserType().subscribe(
    //   data=>this.userType=data
    // );
    //this.student.
    this.quizService.getAllTopics().subscribe(
      data=>this.getTopic=data
    );
  }

  OnSubmit(){   
    console.log(this.topicId);    
    console.log("select class");
    // this.quizService.registerUser(username,password,this.userId).subscribe(
    //   (data:any)=>{
    //     localStorage.clear();
    //     localStorage.setItem('user',JSON.stringify(data)); 
         this.route.navigate(['/quiz',this.topicId]);
         
    //   }
    // );
    // this.quizService.getAllTopics().subscribe(
    //   (data:any)=>{
    //   }
    // );
    //this.quizService.getQuestions(this.topicId);
    
  }
  public topicChange(event):void{
    this.topicId = event.target.value;
  }
}
