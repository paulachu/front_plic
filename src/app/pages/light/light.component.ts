import { Component, OnInit } from '@angular/core';
import {LightInterface} from "../../interfaces/light-interface";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  lights: LightInterface[]
  = new Array()

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getLevel().subscribe(res =>
    {
      res.forEach(level => {
        return this.requestService.getLight(level.light).subscribe(r => {
          r.levelNumber = level.levelNumber;
          this.lights.push(r)
        });
      })
    });
  }
}
