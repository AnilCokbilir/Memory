import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryServiceService {

  animals: any[] = ['./assets/img/löwe.jpg', './assets/img/pferde.jpg', './assets/img/qualle.jpg', './assets/img/schildkröte.jpg', './assets/img/tiger.jpg', './assets/img/vogel.jpg',]

  constructor() { }



}
