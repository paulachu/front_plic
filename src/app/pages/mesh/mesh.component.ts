import { Component, OnInit } from '@angular/core';
import {MeshInterface} from "../../interfaces/mesh-interface";

@Component({
  selector: 'app-mesh',
  templateUrl: './mesh.component.html',
  styleUrls: ['./mesh.component.scss']
})
export class MeshComponent implements OnInit {

  meshs: MeshInterface[] = new Array();

  constructor() { }

  ngOnInit(): void {
    let mesh: MeshInterface = {
      id: 1,
      levelName: "niveau 1",
      link: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
    }
    this.meshs.push(mesh);
    mesh = {
      id: 2,
      levelName: "niveau 2",
      link: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
    }
    this.meshs.push(mesh);
    mesh = {
      id: 3,
      levelName: "niveau 3",
      link: "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
    }
    this.meshs.push(mesh);
  }
}
