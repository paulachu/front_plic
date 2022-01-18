import { Component, OnInit } from '@angular/core';
import {SkyboxInterface} from "../../interfaces/skybox-interface";
import {TextureInterface} from "../../interfaces/texture-interface";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-texture',
  templateUrl: './texture.component.html',
  styleUrls: ['./texture.component.scss']
})
export class TextureComponent implements OnInit {

  textures: TextureInterface[] = new Array();
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getLevel().subscribe(
      res => res.forEach(level =>
        this.requestService.getTexture(level.texture).subscribe(r =>
        {
          r.levelNumber = level.levelNumber;
          this.textures.push(r)
        })
      ));
    console.log(this.textures)
  }

}
