import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryServiceService {

  animals: any[] = [
    {
      'img': './assets/img/löwe.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/pferde.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/qualle.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/schildkröte.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/tiger.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/vogel.jpg',
      'choosed': false
    }, {
      'img': './assets/img/löwe.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/pferde.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/qualle.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/schildkröte.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/tiger.jpg',
      'choosed': false
    },
    {
      'img': './assets/img/vogel.jpg',
      'choosed': false
    },
  ]

  constructor() { }



}
