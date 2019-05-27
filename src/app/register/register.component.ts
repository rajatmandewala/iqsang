import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernamepattern="[a-zA-Z ]*";
  constructor(private quizService:QuizService,private route:Router){}

  ngOnInit() {
  }

  OnSubmit(username:string,password:string)
  {
    this.quizService.registerInstitue(username,password).subscribe(
      (data:any)=>{
        localStorage.clear();
        localStorage.setItem('user',JSON.stringify(data)); 
        this.route.navigate(['/login']);
      }
    );
  }
}
