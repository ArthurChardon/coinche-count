import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum DialogScoreMode {
  PICK, TYPE
}

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  subject = new Subject<boolean>();

  dialogOpen = false;

  ModeEnum = DialogScoreMode;
  mode: DialogScoreMode = DialogScoreMode.PICK; 


  constructor() { }

  openDialog() {
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogOpen = false;
  }

  isDialogOpened() {
    return this.dialogOpen;
  }

  setMode(mode: DialogScoreMode) {
    this.mode = mode;
  }
}
