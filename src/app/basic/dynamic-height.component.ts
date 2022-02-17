import { Component } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'dynamic-height-demo',
  template: `
    <div>
      <h3>
        Dynamic Height w/ Virtual Scrolling
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/dynamic-height.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <bks-datatable
        class="material"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="getRowHeight"
        [scrollbarV]="true"
      >
        <bks-datatable-column name="Name"></bks-datatable-column>
        <bks-datatable-column name="Gender"></bks-datatable-column>
        <bks-datatable-column name="Row Height" prop="height"></bks-datatable-column>
      </bks-datatable>
    </div>
  `
})
export class DynamicHeightComponent {
  rows = [];
  expanded = {};
  timeout: any;

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
      const rows = JSON.parse(req.response).splice(0, 100);

      for (const row of rows) {
        row.height = Math.floor(Math.random() * 80) + 50;
      }

      cb(rows);
    };

    req.send();
  }

  getRowHeight(row) {
    console.log('ROW', row);
    if (!row) {
      return 50;
    }
    if (row.height === undefined) {
      return 50;
    }
    return row.height;
  }
}
