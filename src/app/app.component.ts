import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Salim';
  display=false;
   changeName() {

     this.name += 'chien';
  }
  
  toggleDisplay() {
    this.display= !this.display;
  }
}