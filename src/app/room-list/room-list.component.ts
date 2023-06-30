import { Component } from '@angular/core';
import { Room } from '../entities';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {

  list:Room[] = [
    {id:1,name:'living Room',area:30,opened:true},
    {id:2,name:'kitchen',area:15,opened:false},
    {id:1,name:'bedroom',area:20,opened:true},
    {id:4,name:'bathroom',area:13,opened:false}
    
    
  ];


}
