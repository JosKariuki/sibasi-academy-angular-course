import { Component, OnInit } from '@angular/core';
import { ClickServiceService } from '../click-service.service';

@Component({
  selector: 'jmk-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  clickNumber = 0;

  constructor(private myService: ClickServiceService) { }

  ngOnInit() {

  }

    plusClick() {
    return this.myService.addClick();
  }

  totalClicks() {
    return this.myService.getClickNumber();
  }

  resetClicks() {
    this.myService.resetClick();
  }

}
