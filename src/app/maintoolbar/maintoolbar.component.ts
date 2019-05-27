import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-maintoolbar',
  templateUrl: './maintoolbar.component.html',
  styleUrls: ['./maintoolbar.component.css']
})
export class MaintoolbarComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  logout(){
    this.route.navigate(['/login']);
  }
}
