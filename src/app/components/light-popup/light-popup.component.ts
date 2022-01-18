import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl,FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSliderChange } from '@angular/material/slider';
import {LightInterface} from "../../interfaces/light-interface";
import {RequestService} from "../../services/request.service";

@Component({
  selector: 'app-light-popup',
  templateUrl: './light-popup.component.html',
  styleUrls: ['./light-popup.component.scss']
})
export class LightPopupComponent implements OnInit {


  lightForm!: LightInterface;
  constructor(public dialogRef: MatDialogRef<LightPopupComponent>, @Inject(MAT_DIALOG_DATA) public light: LightInterface, private requestService: RequestService) {

    this.lightForm = {
      id: this.light.id,
      levelNumber: this.light.levelNumber,
      red: this.light.red,
      green: this.light.green,
      blue: this.light.blue,
      alpha: this.light.alpha
    }
  }
  ngOnInit(): void {
  }
  getColor(): string
  {
    return 'rgba(' + this.lightForm.red + ',' + this.lightForm.green + ',' + this.lightForm.blue + ',' + this.lightForm.alpha / 255 + ')';
  }
  changeGreenValue(change: MatSliderChange)
  {
    this.lightForm.green = change.value as number;
  }
  changeRedValue(change: MatSliderChange)
  {
    this.lightForm.red = change.value as number;
  }
  changeBlueValue(change: MatSliderChange)
  {
    this.lightForm.blue = change.value as number;
  }
  changeAlphaValue(change: MatSliderChange)
  {
    this.lightForm.alpha = change.value as number;
  }
  async updateLight() {
    await this.requestService.updateLight(this.lightForm).subscribe();
    this.dialogRef.close(this.lightForm);
  }
  closeDialog()
  {
    this.dialogRef.close(null);
  }
}
