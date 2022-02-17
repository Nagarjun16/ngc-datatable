import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[bks-datatable-cell-template]' })
export class DataTableColumnCellDirective {
  constructor(public template: TemplateRef<any>) {}
}
