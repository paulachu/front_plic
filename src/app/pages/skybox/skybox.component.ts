import { Component, OnInit } from '@angular/core';
import {SkyboxInterface} from "../../interfaces/skybox-interface";
import {MeshInterface} from "../../interfaces/mesh-interface";

@Component({
  selector: 'app-skybox',
  templateUrl: './skybox.component.html',
  styleUrls: ['./skybox.component.scss']
})
export class SkyboxComponent implements OnInit {

  skyboxs: SkyboxInterface[] = new Array();
  constructor() { }

  ngOnInit(): void {
    let skybox: SkyboxInterface = {
      id: 1,
      levelName: "niveau 1",
      link: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
    }
    this.skyboxs.push(skybox);
    skybox = {
      id: 2,
      levelName: "niveau 2",
      link: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
    }
    this.skyboxs.push(skybox);
    skybox = {
      id: 3,
      levelName: "niveau 3",
      link: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
    }
    this.skyboxs.push(skybox);
  }

}
