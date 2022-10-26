import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'dialog-score',
  templateUrl: './dialog-score.component.html',
  styleUrls: ['./dialog-score.component.scss']
})
export class DialogScoreComponent implements OnInit {

  toAdd = '';

  constructor(
    public dialogRef: MatDialogRef<DialogScoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
