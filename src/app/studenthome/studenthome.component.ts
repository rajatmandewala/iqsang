import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  public isMenuOpen=true;
  public isTest=false;
  public isQuiz=false;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  
  sidenavEvents(str){
    console.log(str);
  }
  onToolbarMenuToggle() {
    console.log('raj',this.isMenuOpen);
    this.isMenuOpen=!this.isMenuOpen;
  }

  test(){
    //console.log('test button');
    this.isTest=true;
    console.log('test button',this.isTest)
  }

  dash() {
    console.log('dash');
    this.isTest=false;
  }
  
  logout(){
    this.route.navigate(['/login']);
  }
}
