import { Component, EventEmitter, Output } from '@angular/core';
import { Room } from '../entities';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent {
  newRoom:Room= {id:0,name:'',area:0,opened:true};

  
  @Output()
  formSubmit = new EventEmitter<Room>();
 
  onSubmit() {
   
   this.formSubmit.emit({...this.newRoom});
}
}