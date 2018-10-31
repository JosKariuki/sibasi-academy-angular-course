import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickServiceService {
  clickNumber = 0;

  constructor() { }

  getClickNumber() {
    return this.clickNumber;
  }

  addClick() {
    return this.clickNumber++;
  }

  resetClick() {
    this.clickNumber = 0;
  }

}
