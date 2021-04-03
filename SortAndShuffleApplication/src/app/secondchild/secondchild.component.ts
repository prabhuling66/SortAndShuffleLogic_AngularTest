import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent implements OnInit {
  resultArray = [ 
    {"value": 1, "color":"#F5000F"},
    {"value": 2, "color":"#2B8EAD"},
    {"value": 3, "color":"#3B3B3F"},
    {"value": 4, "color":"#6F98A8"},
    {"value": 5, "color":"#FFFFFF"},
    {"value": 6, "color":"#BFBFBF"},
    {"value": 7, "color":"#EFEFEF"},
    {"value": 8, "color":"#2F454E"},
    {"value": 9, "color":"#72C3DC"},
 ];
  constructor() { }

  ngOnInit(): void {
    this.shuffleArray()
  }
  shuffleArray(){
    let array=this.resultArray;
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 != currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
   }
    this.resultArray = array;
  }
  sortArray(){
    this.resultArray.sort((a,b)=>{
      if(a.value > b.value) {
        return 1;
      } else if(a.value < b.value) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
