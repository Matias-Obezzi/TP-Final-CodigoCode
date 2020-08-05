import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public route: string;

  constructor(router:Router) {
    router.events.subscribe((event: any) => {
      if(event instanceof NavigationStart) {
        this.route = event.url;
      }
    });
  }

  ngOnInit(): void {
  }

}
