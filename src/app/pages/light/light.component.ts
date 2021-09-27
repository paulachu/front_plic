import { Component, OnInit } from '@angular/core';
import {LightInterface} from "../../interfaces/light-interface";

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  lights: LightInterface[]
  = new Array()

  constructor() { }

  ngOnInit(): void {
    let light: LightInterface = {
      levelName: "niveau 1",
      r: 65,
      g: 120,
      b: 125,
      a: 255
    }
    this.lights.push(light);
    light = {
      levelName: "niveau 2",
      r: 175,
      g: 175,
      b: 50,
      a: 255
    }
    this.lights.push(light);
    light = {
      levelName: "niveau 3",
      r: 200,
      g: 120,
      b: 125,
      a: 255
    }
    this.lights.push(light);
  }

}
