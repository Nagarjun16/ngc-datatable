# Row Detail Options

### `template`: `TemplateRef`

Template to use in the detail row. Example:

```
<ng-template let-row="row">
  <div>
    <div><strong>Address</strong></div>
    <div>{{row.address.city}}, {{row.address.state}}</div>
  </div>
</ng-template>
```

### `rowHeight`: `Number|Function`

Height of the detail row.

**Template**

```html
<bks-datatable-row-detail [rowHeight]="getHeight" #myDetailRow (toggle)="onDetailToggle($event)">
  <ng-template let-row="row" bks-datatable-row-detail-template>
    <div><strong>Address</strong></div>
    <div>{{row.address.city}}, {{row.address.state}}</div>
  </ng-template>
</bks-datatable-row-detail>
```

**Typescript**

```javascript
getHeight(row: any, index: number): number {
  return row.someHeight;
}
```
