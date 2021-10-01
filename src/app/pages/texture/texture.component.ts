import { Component, OnInit } from '@angular/core';
import {SkyboxInterface} from "../../interfaces/skybox-interface";
import {TextureInterface} from "../../interfaces/texture-interface";

@Component({
  selector: 'app-texture',
  templateUrl: './texture.component.html',
  styleUrls: ['./texture.component.scss']
})
export class TextureComponent implements OnInit {

  textures: TextureInterface[] = new Array();
  constructor() { }

  ngOnInit(): void {
    let texture: TextureInterface = {
      id: 1,
      levelName: "niveau 1",
      link: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
    }
    this.textures.push(texture);
    texture = {
      id: 2,
      levelName: "niveau 2",
      link: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
    }
    this.textures.push(texture);
    texture = {
      id: 3,
      levelName: "niveau 3",
      link: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
    }
    this.textures.push(texture);
  }

}
