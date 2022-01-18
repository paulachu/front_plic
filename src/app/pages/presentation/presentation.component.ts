import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getLevel().subscribe(res =>
    this.requestService.getLight(res[0].id).subscribe(r => console.log(r)));
  }

}
