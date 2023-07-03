import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quizz } from '../entities';


@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizItemComponent {

   status='';
   @Output()
   goodAnswer = new EventEmitter();
   @Output ()
   choose = new EventEmitter;

   @Input({required: true})

   quizz:Quizz;

   chooseAnswer(index:number){
      if(this.status == ''){
        if(index===1){
          this.status = 'good';
          this.goodAnswer.emit();
        }
          else{ this.status ='bad' ;

        }
      }
}

  next(){
    this.choose.emit();
  }
}
