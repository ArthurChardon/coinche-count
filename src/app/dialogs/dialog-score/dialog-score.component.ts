import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogsService, DialogScoreMode } from '../dialogs.service';

export interface DialogData {
  title: string;
  count: number;
}

@Component({
  selector: 'dialog-score',
  templateUrl: './dialog-score.component.html',
  styleUrls: ['./dialog-score.component.scss'],
})
export class DialogScoreComponent implements OnInit {
  toAdd = '';
  choices: number[] = [];

  ModeEnum = DialogScoreMode;

  constructor(
    public dialogRef: MatDialogRef<DialogScoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _dialogsService: DialogsService
  ) {}

  ngOnInit(): void {
    for (let i = 80; i < 170; i += 10) {
      this.choices.push(i);
    }
    this.choices.push(250);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getMode(): DialogScoreMode {
    return this._dialogsService.mode;
  }

  isMode(mode: DialogScoreMode) {
    return this.getMode() === mode;
  }
}
