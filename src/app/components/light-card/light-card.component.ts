import { Component, OnInit, Input } from '@angular/core';
import {LightInterface} from "../../interfaces/light-interface";

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.scss']
})
export class LightCardComponent implements OnInit {

  @Input()
  light!: LightInterface;
  constructor() { }

  ngOnInit(): void {
  }
  openDialog()
  {
    //TODO
    console.log("click")
  }
  getColor(): string
  {
    return 'rgba(' + this.light.r + ',' + this.light.g + ',' + this.light.b + ',' + this.light.a + ')';
  }
}
