import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent {

  list =['le soleil','le ciel','oiseaux','et ta mdr'];
  addItem(text :string){
      this.list.push(text);

  }

  

}
