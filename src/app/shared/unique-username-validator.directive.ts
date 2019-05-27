import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';

import { Observable } from 'rxjs';
import { QuizService } from './quiz.service';
import { promise } from 'protractor';


@Directive({
  selector: '[UniqueUsername]'
})
export class UniqueUsernameValidatorDirective{
  constructor(private quizService:QuizService) { }
  // validate(c : AbstractControl) : promise<ValidationErrors | null> | Observable<ValidationErrors | null>
  // {
  //   return this.quizService.getUserByUserName(c.value).pipe();;

  // }

}
