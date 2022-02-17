import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[bks-datatable-tree-toggle]' })
export class DataTableColumnCellTreeToggle {
  constructor(public template: TemplateRef<any>) {}
}
