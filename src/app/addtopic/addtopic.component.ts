import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {

  public topicType:string;
  constructor(private quizService:QuizService,private route:Router) { }

  ngOnInit() {
  }

  public topicTypeChange(event):void{
    this.topicType=event.target.value;    
  }
  //topicname.value,description.value
  //topicName
//topicDescription
//topicType

// OnSubmit(username:string,password:string){
//   console.log(this.userId);    
//   this.quizService.registerUser(username,password,this.userId).subscribe(
//     (data:any)=>{
//       localStorage.clear();
//       localStorage.setItem('user',JSON.stringify(data)); 
//       this.route.navigate(['/login']);
//     }
//   );
// }

  OnSubmit(topicname:string,description:string){
    console.log('sublir',topicname,description,this.topicType);
    this.quizService.addTopic(topicname,description,this.topicType).subscribe(
      (data:any)=>{
        console.log('add topic res');
      }
    );

  }
}
