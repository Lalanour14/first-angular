import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent { 
  name = 'Salim';
display=false;
 changeName() {

   this.name += 'chien';
}

toggleDisplay() {
  this.display= !this.display;
}

}
