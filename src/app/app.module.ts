import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { appRoutes } from './routes';
import { QuizService } from './shared/quiz.service';
import { LoginComponent } from './login/login.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UniqueUsernameValidatorDirective } from './shared/unique-username-validator.directive';
import { SelecttesttopicComponent } from './selecttesttopic/selecttesttopic.component';
import { DemocompComponent } from './democomp/democomp.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { MaterialModule } from './material-module';
import { MaintoolbarComponent } from './maintoolbar/maintoolbar.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { InstructorhomeComponent } from './instructorhome/instructorhome.component';
import { AddtopicComponent } from './addtopic/addtopic.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    LoginComponent,
    UserregisterComponent,
    UniqueUsernameValidatorDirective,
    SelecttesttopicComponent,
    DemocompComponent,
    StudenthomeComponent,
    AddquestionComponent,
    MaintoolbarComponent,
    LeftmenuComponent,
    AdminhomeComponent,
    InstructorhomeComponent,
    AddtopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }