import { Component, OnInit } from '@angular/core';
import { MemoryServiceService } from '../memory-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  firstChoose: any;
  secondChoose: any;
  choosedTwoCards: number[] = [];
  duplicateAnimals: string[] = [];
  check: boolean = false;
  constructor(public memoryService: MemoryServiceService) { }


  ngOnInit(): void {

    for (var i = 0; i < this.memoryService.animals.length; ++i) {
      this.duplicateAnimals.push(this.memoryService.animals[i]);
      this.duplicateAnimals.push(this.memoryService.animals[i]);
    }

    this.memoryService.animals = this.duplicateAnimals;

    console.log(this.memoryService.animals)

    this.shuffle()
  }


  shuffle() {
    var j, x, i;
    for (i = this.memoryService.animals.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.memoryService.animals[i];
      this.memoryService.animals[i] = this.memoryService.animals[j];
      this.memoryService.animals[j] = x;
    }
    console.log(this.memoryService.animals)
  }

  chooseCard(i: number) {

    this.check = true;

    if (this.choosedTwoCards.length < 1) {
      this.choosedTwoCards.push(i);
      this.firstChoose = this.memoryService.animals[i];
      this.check = true;
      console.log('ziehen')


    } else if (this.choosedTwoCards.length < 2) {
      this.choosedTwoCards.push(i);
      this.secondChoose = this.memoryService.animals[i];

      console.log('zum 2. mal gezogen')
      if (this.firstChoose == this.secondChoose) {
        console.log('win')
      }
    } else {
      console.log('zwei mal gespielt')
      this.choosedTwoCards = [];
      this.firstChoose = '';
      this.secondChoose = '';
      this.chooseCard(i)
    }





    // if (this.choosedTwoCards == false) {

    //   console.log(this.firstChoose);
    // }

    // if (this.firstChoose == this.secondChoose && this.choosedTwoCards == true) {
    //   console.log('true')
    //   this.choosedTwoCards = false;

    //   this.firstChoose = '';
    //   this.secondChoose = '';
    // }
  }

}
