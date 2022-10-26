import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

export interface DialogData {
  title: string;
  count: number;
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
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
