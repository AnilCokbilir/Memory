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
  Param: number[] = [];
  iChoose!: number;
  iChoose2!: number;

  constructor(public memoryService: MemoryServiceService) { }


  ngOnInit(): void {

    // for (let i = 0; i < this.memoryService.animals.length; ++i) {
    //   this.duplicateAnimals.push(this.memoryService.animals[i]);
    //   this.duplicateAnimals.push(this.memoryService.animals[i]);
    // }

    // this.memoryService.animals = this.duplicateAnimals;
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
    if (this.choosedTwoCards.length == 0) {
      this.choosedTwoCards.push(i);
      this.firstChoose = this.memoryService.animals[i].img;

      console.log('ziehen')
      this.showCards(i)
      console.log('first', this.Param)
    } else if (this.choosedTwoCards.length == 1) {
      this.choosedTwoCards.push(i);
      this.secondChoose = this.memoryService.animals[i].img;

      console.log(this.memoryService.animals)
      console.log('zum 2. mal gezogen')
      this.showCards(i)
      console.log('sec', this.Param)
      if (this.firstChoose == this.secondChoose) {
        console.log('win')
        this.memoryService.animals.splice(this.iChoose, 1);
        this.memoryService.animals.splice(this.iChoose2, 1);
        console.log(this.memoryService.animals)
      } else {
        setTimeout(() => {
          this.iChoose = this.Param[0];
          this.iChoose2 = this.Param[1];
          console.log('asdfadsf', this.iChoose)
          this.memoryService.animals[this.iChoose].choosed = false;
          this.memoryService.animals[this.iChoose2].choosed = false;
          this.Param = []
        }, 1500);
      }
    } else {
      console.log('zwei mal gespielt');
      this.choosedTwoCards = [];
      this.firstChoose = '';
      this.secondChoose = '';
      this.chooseCard(i)
    }
    console.log(this.memoryService.animals)

  }


  showCards(i: number) {
    this.saveParam(i);
    this.memoryService.animals[i].choosed = true;
    console.log(this.memoryService.animals[i])

  }

  saveParam(i: number) {
    this.Param.push(i)
  }

}
