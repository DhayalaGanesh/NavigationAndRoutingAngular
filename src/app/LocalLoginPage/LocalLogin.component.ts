import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalLoginService } from '../LoggedInUser.service';

@Component ({
    selector: 'dg-locallogin',
    templateUrl: './LocalLogin.component.html',
    styleUrls: ['./LocalLogin.component.scss']
})

export class LocalLogin{
    constructor(private fb:FormBuilder, private router: Router, private loggedInUserService: LocalLoginService){

    }
    title = 'myfirstangularapp';
    showNavigationBar: boolean = true;
    credentials = this.fb.group({
      name: new FormControl('', {
        validators: Validators.compose([ 
          Validators.required,
          Validators.email
        ])
      }),
      password: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
    });
  
    FormSubmit() {
      if(this.credentials.valid){
        console.log('valid');
        this.router.navigateByUrl('FirstPage');
        this.loggedInUserService.SetIsLoggedIn(true);
      }
      else{
        console.log('ada dei');
      }
    }
}

class credentials {

}