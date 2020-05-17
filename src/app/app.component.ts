import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalLoginService } from './LoggedInUser.service';


@Component({
  selector: 'dg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showNavigationBar: boolean = false;
  isLoggedIn: boolean = false;
  constructor(public router: Router, public loginService: LocalLoginService){}
  ngOnInit() {
    this.showNavigationBar= this.router.url.includes('login');
    this.isLoggedIn = this.loginService.getIsLoggedIn();
    if(this.loginService.getIsLoggedIn()){
      this.router.navigateByUrl('FirstPage');
    }
    else{
      this.router.navigateByUrl('loginpage')
    }
  }
}