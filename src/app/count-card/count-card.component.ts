import { Component, OnInit, Input } from '@angular/core';

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
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  decrement() {
    this.count -= 10;
  }

  increment() {
    this.count += 10;
  }

}
