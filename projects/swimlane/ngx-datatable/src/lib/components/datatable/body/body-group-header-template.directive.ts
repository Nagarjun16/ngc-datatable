import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[bks-datatable-group-header-template]'
})
export class DatatableGroupHeaderTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
