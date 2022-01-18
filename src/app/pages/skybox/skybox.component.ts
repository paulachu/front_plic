import { Component, OnInit } from '@angular/core';
import {SkyboxInterface} from "../../interfaces/skybox-interface";
import {MeshInterface} from "../../interfaces/mesh-interface";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-skybox',
  templateUrl: './skybox.component.html',
  styleUrls: ['./skybox.component.scss']
})
export class SkyboxComponent implements OnInit {

  skyboxs: SkyboxInterface[] = new Array();
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getLevel().subscribe(
      res => res.forEach(level => this.requestService.getSkybox(level.skybox).subscribe(r =>{
        r.levelNumber = level.levelNumber;
        this.skyboxs.push(r)
      })));
  }

}
