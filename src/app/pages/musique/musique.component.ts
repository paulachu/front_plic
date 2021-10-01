import { Component, OnInit } from '@angular/core';

import {MusicInterface} from "../../interfaces/music-interface";

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.scss']
})
export class MusiqueComponent implements OnInit {
  musics: MusicInterface[]
    = new Array()
  constructor() { }

  ngOnInit(): void {
    let music: MusicInterface = {
      id: 1,
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      levelName : "niveau 1"
    }
    this.musics.push(music);
    music = {
      id: 2,
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      levelName : "niveau 2"
    }
    this.musics.push(music);
    music = {
      id: 3,
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      levelName : "niveau 3"
    }
    this.musics.push(music);
  }

}
