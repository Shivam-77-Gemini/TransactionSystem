import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranscationsComponent } from './transcations/transcations.component';

const routes: Routes = [{path:'transactionScreen',component:TranscationsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
