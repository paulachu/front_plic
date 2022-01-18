import { Component, OnInit } from '@angular/core';

import {MusicInterface} from "../../interfaces/music-interface";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.scss']
})
export class MusiqueComponent implements OnInit {
  musics: MusicInterface[]
    = new Array()
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getLevel().subscribe(
      res => res.forEach(level => this.requestService.getMusic(level.music).subscribe(r =>{
        r.levelNumber = level.levelNumber;
        this.musics.push(r)
      })));
  }

}
