import { Component } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'column-flex-demo',
  template: `
    <div>
      <h3>
        Flex Column Width Distribution
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/columns/column-flex.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <bks-datatable
        class="material"
        [columnMode]="ColumnMode.flex"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        [rows]="rows"
      >
        <bks-datatable-column name="Name" [flexGrow]="3">
          <ng-template let-value="value" bks-datatable-cell-template>
            {{ value }}
          </ng-template>
        </bks-datatable-column>
        <bks-datatable-column name="Gender" [flexGrow]="1">
          <ng-template let-row="row" let-value="value" bks-datatable-cell-template>
            {{ value }}
          </ng-template>
        </bks-datatable-column>
        <bks-datatable-column name="Age" [flexGrow]="1">
          <ng-template let-value="value" bks-datatable-cell-template>
            {{ value }}
          </ng-template>
        </bks-datatable-column>
      </bks-datatable>
    </div>
  `
})
export class ColumnFlexComponent {
  rows = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data.splice(0, 5);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
