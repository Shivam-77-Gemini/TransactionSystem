import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { TranscationsComponent } from './transcations/transcations.component';

const routes: Routes = [{path:'',redirectTo:'/login',pathMatch:'full'},{path:'transactionScreen',component:TranscationsComponent},{path:'login',component:LoginFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
