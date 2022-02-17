import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollbarHelper } from '../../services/datatable/scrollbar-helper.service';
import { DimensionsHelper } from '../../services/datatable/dimensions-helper.service';
import { ColumnChangesService } from '../../services/datatable/column-changes.service';
import { DataTableFooterTemplateDirective } from './footer/footer-template.directive';
import { VisibilityDirective } from '../../directives/datatable/visibility.directive';
import { DraggableDirective } from '../../directives/datatable/draggable.directive';
import { ResizeableDirective } from '../../directives/datatable/resizeable.directive';
import { OrderableDirective } from '../../directives/datatable/orderable.directive';
import { LongPressDirective } from '../../directives/datatable/long-press.directive';
import { ScrollerComponent } from './body/scroller.component';
import { DatatableComponent } from './datatable.component';
import { DataTableColumnDirective } from './columns/column.directive';
import { DataTableHeaderComponent } from './header/header.component';
import { DataTableHeaderCellComponent } from './header/header-cell.component';
import { DataTableBodyComponent } from './body/body.component';
import { DataTableFooterComponent } from './footer/footer.component';
import { DataTablePagerComponent } from './footer/pager.component';
import { ProgressBarComponent } from './body/progress-bar.component';
import { DataTableBodyRowComponent } from './body/body-row.component';
import { DataTableRowWrapperComponent } from './body/body-row-wrapper.component';
import { DatatableRowDetailDirective } from './row-detail/row-detail.directive';
import { DatatableGroupHeaderDirective } from './body/body-group-header.directive';
import { DatatableRowDetailTemplateDirective } from './row-detail/row-detail-template.directive';
import { DataTableBodyCellComponent } from './body/body-cell.component';
import { DataTableSelectionComponent } from './body/selection.component';
import { DataTableColumnHeaderDirective } from './columns/column-header.directive';
import { DataTableColumnCellDirective } from './columns/column-cell.directive';
import { DataTableColumnCellTreeToggle } from './columns/tree.directive';
import { DatatableFooterDirective } from './footer/footer.directive';
import { DatatableGroupHeaderTemplateDirective } from './body/body-group-header-template.directive';
import { DataTableSummaryRowComponent } from './body/summary/summary-row.component';

@NgModule({
  imports: [CommonModule],
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
  declarations: [
    DataTableFooterTemplateDirective,
    VisibilityDirective,
    DraggableDirective,
    ResizeableDirective,
    OrderableDirective,
    LongPressDirective,
    ScrollerComponent,
    DatatableComponent,
    DataTableColumnDirective,
    DataTableHeaderComponent,
    DataTableHeaderCellComponent,
    DataTableBodyComponent,
    DataTableFooterComponent,
    DataTablePagerComponent,
    ProgressBarComponent,
    DataTableBodyRowComponent,
    DataTableRowWrapperComponent,
    DatatableRowDetailDirective,
    DatatableGroupHeaderDirective,
    DatatableRowDetailTemplateDirective,
    DataTableBodyCellComponent,
    DataTableSelectionComponent,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableColumnCellTreeToggle,
    DatatableFooterDirective,
    DatatableGroupHeaderTemplateDirective,
    DataTableSummaryRowComponent
  ],
  exports: [
    DatatableComponent,
    DatatableRowDetailDirective,
    DatatableGroupHeaderDirective,
    DatatableRowDetailTemplateDirective,
    DataTableColumnDirective,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableColumnCellTreeToggle,
    DataTableFooterTemplateDirective,
    DatatableFooterDirective,
    DataTablePagerComponent,
    DatatableGroupHeaderTemplateDirective
  ]
})
export class NgxDatatableModule {
  /**
   * Configure global configuration via INgxDatatableConfig
   * @param configuration
   */
  static forRoot(configuration: INgxDatatableConfig): ModuleWithProviders<NgxDatatableModule> {
    return {
      ngModule: NgxDatatableModule,
      providers: [{ provide: 'configuration', useValue: configuration }]
    };
  }
}

/**
 * Interface definition for INgxDatatableConfig global configuration
 */
export interface INgxDatatableConfig {
  messages: {
    emptyMessage: string; // Message to show when array is presented, but contains no values
    totalMessage: string; // Footer total message
    selectedMessage: string; // Footer selected message
  };
}
