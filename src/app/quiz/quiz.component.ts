import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { parse } from 'url';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 public topicId: number;
  private sub: any;

  constructor(private router:Router,private quizService:QuizService,private route: ActivatedRoute) {

    console.log('quiz constructor');
    localStorage.clear();
    this.quizService.tempSecond=0;
   }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.topicId = +params['topicId']; // (+) converts string 'id' to a number
      //console.log('quiz');
    //  console.log(this.topicId);
      // In a real app: dispatch action to load the details here.
   });
  console.log('quiz init');

    if(parseInt(localStorage.getItem('seconds'))>0){
      console.log('if');
        
     this.quizService.seconds=parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress=parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns=JSON.parse(localStorage.getItem('qns'));
      if(this.quizService.qnProgress==10){
        this.router.navigate(['/result']);
      }else{
        this.startTimer();
      }
    }else{

      console.log("else");
    this.quizService.seconds=0;
    this.quizService.qnProgress=0;
    console.log(this.topicId);
    this.quizService.getQuestions(this.topicId).subscribe(
      (data:any)=>{        
        console.log("quiz data method");
        this.quizService.qns=data;
         this.startTimer();
      }
    );
    }
  }

  startTimer(){
    this.quizService.timer=setInterval(()=>{
      this.quizService.seconds++;
      console.log('sec',this.quizService.seconds);
      this.quizService.tempSecond++;
      console.log('temp sec',this.quizService.tempSecond);
      localStorage.setItem('seconds',this.quizService.seconds.toString());
      if((this.quizService.tempSecond % 10 )==0){
          this.quizService.tempSecond=0;
          //this.quizService.qnProgress++;
          this.Answer(0,0);
        }
    },1000);
  }
  
  Answer(questionId,choice){
    
    if(this.quizService.tempSecond!=0){
      this.quizService.tempSecond=0;
    }

    this.quizService.qns[this.quizService.qnProgress].answer=choice;
    localStorage.setItem('qns',JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    localStorage.setItem('qnProgress',this.quizService.qnProgress.toString());
    if(this.quizService.qnProgress==10){
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
      localStorage.clear();
    }
  }
}
