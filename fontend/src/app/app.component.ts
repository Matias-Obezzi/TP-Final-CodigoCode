import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Marta Barrera';
  expanded: boolean = true;
  home: boolean = false;

  constructor(private router: Router){
    router.events.subscribe((data) => {
      if(data instanceof NavigationEnd){
        if(window.location.pathname=='/'){
          this.expanded = true;
          this.home = true;
        }else{
          this.home = false;
        }
      }
    })
  }

  ngOnInit(){
  }

  expandChange(){
    this.expanded =!this.expanded;
  }

}
