import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BoucleComponent } from './boucle/boucle.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CalculComponent } from './calcul/calcul.component';
import { FirstComponent } from './first/first.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomItemComponent } from './room-item/room-item.component';
import { RoomFormComponent } from './room-form/room-form.component';
@NgModule({
  declarations: [
   
    AppComponent,
    BoucleComponent,
    CounterComponent,
    CalculComponent,
    FirstComponent,
    RoomListComponent,
    RoomItemComponent,
    RoomFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
