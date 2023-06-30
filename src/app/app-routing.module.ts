import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FirstComponent } from './first/first.component';
import { CalculComponent } from './calcul/calcul.component';
import { BoucleComponent } from './boucle/boucle.component';

const routes: Routes = [
  {path:'', component:FirstComponent},
  {path:'counter', component:CounterComponent},
  {path:'boucle', component:BoucleComponent},
  {path:'calcul', component:CalculComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
