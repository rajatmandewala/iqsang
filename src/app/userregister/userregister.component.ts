import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';
import {FormGroup, FormControl} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
  usernamepattern="[a-zA-Z ]*";
  userRegisterForm:FormGroup;
  userType: {};
  public userId:number;

  constructor(private quizService:QuizService,private route:Router) { }

  ngOnInit() {
  
    this.quizService.getUserType().subscribe(
      data=>this.userType=data
    );
    
  
    this.userRegisterForm=new FormGroup({
      userType:new FormControl('')
    });
  }

  OnSubmit(username:string,password:string){
    console.log(this.userId);    
    this.quizService.registerUser(username,password,this.userId).subscribe(
      (data:any)=>{
        localStorage.clear();
        localStorage.setItem('user',JSON.stringify(data)); 
        this.route.navigate(['/login']);
      }
    );
  }
  public instituteChange(event):void{
    this.userId = event.target.value;
  }
}
