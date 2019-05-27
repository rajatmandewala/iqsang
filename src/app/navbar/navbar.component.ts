import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private quizSerice:QuizService) { }

  ngOnInit() {
  }

  SignOut()
  {
    localStorage.clear();
    clearInterval(this.quizSerice.timer);
    this.router.navigate(['/login']);
  }

}
