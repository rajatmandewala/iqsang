import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import {LoginComponent} from './login/login.component'
import { UserregisterComponent } from './userregister/userregister.component';
import {SelecttesttopicComponent} from './selecttesttopic/selecttesttopic.component'
import {DemocompComponent} from './democomp/democomp.component'
import { StudenthomeComponent } from './studenthome/studenthome.component'
import {AddquestionComponent} from './addquestion/addquestion.component'
import {MaintoolbarComponent} from './maintoolbar/maintoolbar.component'
import {LeftmenuComponent} from './leftmenu/leftmenu.component'
import {AdminhomeComponent} from './adminhome/adminhome.component'
import {InstructorhomeComponent} from './instructorhome/instructorhome.component' 
import {AddtopicComponent} from './addtopic/addtopic.component'   

export const appRoutes : Routes=[
{path:'register',component:RegisterComponent},
{path:'userregister',component:UserregisterComponent},
{path:'quiz/:topicId',component:QuizComponent},
{path:'result',component:ResultComponent},
{path:'login',component:LoginComponent},
{path:'selecttopic',component:SelecttesttopicComponent},
{path:'democomp',component:DemocompComponent},
{path:'studenthome',component:StudenthomeComponent},
{path:'addquestion',component:AddquestionComponent},
{path:'maintoolbar',component:MaintoolbarComponent},
{path:'leftmenu',component:LeftmenuComponent},
{path:'adminhome',component:AdminhomeComponent},
{path:'instructorhome',component:InstructorhomeComponent},
{path:'addtopic',component:AddtopicComponent},
{path:'',redirectTo:'/login',pathMatch:'full'}
//{path:'',redirectTo:'/register',pathMatch:'full'}
];
