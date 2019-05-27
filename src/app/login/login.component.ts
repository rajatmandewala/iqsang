import { Component, OnInit } from '@angular/core';
import {QuizService} from '../shared/quiz.service'
import {Router} from '@angular/router'
import { reject } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private quizService:QuizService,private route:Router) { }

  ngOnInit() {
  }

  /*
  OnSubmit(username:string,password:string)
  {
    this.quizService.registerUser(username,password).subscribe(
      (data:any)=>{
        localStorage.clear();
        localStorage.setItem('user',JSON.stringify(data)); 
        this.route.navigate(['/login']);
      }
    );
  }
  */

  OnSubmit(username:string,password:string){
    //var f:boolean;
   // debugger
   console.log("on submit");
    this.quizService.authUser(username,password).subscribe(          
      (data:any)=>{
    //  debugger
      if(data[0].role == "INSTRUCTOR"){
        localStorage.setItem('instructor',JSON.stringify(data));
        this.route.navigate(['/addquestion']);
      }else if(data[0].role == "USER"){
        localStorage.setItem('student',JSON.stringify(data));
        console.log('user');
        this.route.navigate(['/studenthome']);
      }
      },
      err=>
      {
        //reject(err);
        alert("invalid user");
        //console.log('invalid user');
      }
    );    
  }
}
