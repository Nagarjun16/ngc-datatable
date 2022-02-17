import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[bks-datatable-row-detail-template]'
})
export class DatatableRowDetailTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
