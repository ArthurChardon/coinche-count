import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogScoreComponent } from '../dialogs/dialog-score/dialog-score.component'
import { DialogsService } from '../dialogs/dialogs.service';
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

  _dialogsService: DialogsService;

  constructor(public dialog: MatDialog, dialogsService: DialogsService) {
    this._dialogsService = dialogsService;
  }

  ngOnInit(): void {
  }

  decrement() {
    this.count -= 10;
  }

  increment() {
    this.count += 10;
  }

  openDialog() {
    this._dialogsService.openDialog();
    const dialogRef = this.dialog.open(DialogScoreComponent, {
      data: {title: this.title},
    });

    dialogRef.afterClosed().subscribe(result => {
      this._dialogsService.closeDialog();
      if(parseInt(result)) {
        this.count += parseInt(result);
      }
    });
  }
}
