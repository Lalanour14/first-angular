 export interface Room {
    id:number ;
    name:string;
    area:number;
    opened:boolean;

 }
 export interface Quizz {
   question:string;
   options:string[];
   answer:number;
}