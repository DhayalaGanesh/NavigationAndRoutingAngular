import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './FirstPage/FirstPage.component';
import { NavigationbarComponent} from './navigationbar/navigationbar.component';
import { LocalLogin } from './LocalLoginPage/LocalLogin.component';


const routes: Routes = [
  {path: 'FirstPage', component: FirstPageComponent },
  {path: 'navigationbar', component: NavigationbarComponent},
  {path: 'loginpage', component: LocalLogin }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
