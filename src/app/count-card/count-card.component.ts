import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogScoreComponent } from '../dialogs/dialog-score/dialog-score.component'
import { DialogsService } from '../dialogs/dialogs.service';
import { CountService } from '../count.service'
@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss'],
  host : {
    '[style.background-color]' : 'color'
  }
})
export class CountCardComponent implements OnInit {
  @Input() color = 'red';
  @Input() title = 'Team';
  count: number = 0;

  constructor(public dialog: MatDialog, private _dialogsService: DialogsService, private _countService: CountService) {
  }

  ngOnInit(): void {
    this._countService.getFromStorage(this.title);
    this._countService.scores.subscribe((data) => {
      const score = data.get(this.title);
      this.count = score ? score : 0;
    })
  }

  decrement() {
    this._countService.registerEntry(-10, this.title);
  }

  increment() {
    this._countService.registerEntry(10, this.title);
  }

  openDialog() {
    this._dialogsService.openDialog();
    const dialogRef = this.dialog.open(DialogScoreComponent, {
      data: {title: this.title, count: this.count},
    });

    dialogRef.afterClosed().subscribe(result => {
      this._dialogsService.closeDialog();
      if(parseInt(result)) {
        this._countService.registerEntry(parseInt(result), this.title);
      }
    });
  }
}
