import { Component } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'full-screen-demo',
  template: `
    <div>
      <h3>
        Full Screen
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/fullscreen.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <bks-datatable
        class="material fullscreen"
        style="top: 52px"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="0"
        [rowHeight]="50"
        [scrollbarV]="true"
        [scrollbarH]="true"
        [rows]="rows"
      >
        <bks-datatable-column name="Id" [width]="80"></bks-datatable-column>
        <bks-datatable-column name="Name" [width]="300"></bks-datatable-column>
        <bks-datatable-column name="Gender"></bks-datatable-column>
        <bks-datatable-column name="Age"></bks-datatable-column>
        <bks-datatable-column name="City" [width]="300" prop="address.city"></bks-datatable-column>
        <bks-datatable-column name="State" [width]="300" prop="address.state"></bks-datatable-column>
      </bks-datatable>
    </div>
  `
})
export class FullScreenComponent {
  rows = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
