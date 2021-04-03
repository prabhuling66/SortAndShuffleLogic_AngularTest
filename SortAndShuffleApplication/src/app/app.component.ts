import { Component, ViewChild } from '@angular/core';
import { FirstchildComponent } from './firstchild/firstchild.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SortAndShuffleApplication';
  isFchildShuffled : boolean=true;
  isFchildSorted : boolean=false;
  isSchildSorted:boolean=false;
  isSchildShuffled : boolean=true;
  arrNumbers = [2,8,3,6,1,4,5,7,9];
  isShuffleDisable:boolean=true;
  isSortDisabled:boolean=false;
  @ViewChild("fChild") firstChild: FirstchildComponent |any;

  @ViewChild("sChild") secondChild: FirstchildComponent |any;

  onShuffleClick(){
    if(!this.isFchildShuffled){
      this.firstChild.shuffleArray();
      this.isFchildShuffled = true;
      this.isFchildSorted = false;
    }
    else{
      this.secondChild.shuffleArray();
      this.isSchildShuffled = true;
      this.isSchildSorted = false;
    }
    this.resultAction();
  }
  onSortClick(){
    if(!this.isFchildSorted){
      this.firstChild.sortArray();
      this.isFchildSorted = true;
      this.isFchildShuffled = false;
    }
    else{
      this.secondChild.sortArray();
      this.isSchildSorted = true;
      this.isSchildShuffled = false;
    }
    this.resultAction();
  }
  resultAction(){
    this.isShuffleDisable=(this.isFchildShuffled && this.isSchildShuffled)? true:false;
    this.isSortDisabled = (this.isSchildSorted && this.isFchildSorted) ? true:false;
  }
}
