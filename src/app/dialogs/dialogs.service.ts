import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  subject = new Subject<boolean>();

  dialogOpen = false;


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
}
