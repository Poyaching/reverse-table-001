import { Component, ContentChildren, Input, OnChanges, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { ReverseTableTemplateDirective } from 'src/app/directives/reverse-table-template.directive';
import * as _ from 'lodash';

@Component({
  selector: 'app-reverse-table',
  templateUrl: './reverse-table.component.html',
  styleUrls: ['./reverse-table.component.css']
})
export class ReverseTableComponent implements OnChanges {

  @Input() header: []
  @Input() values: []
  @Input() columns: number

  viewValues: any[][]
  bodyTemplate: TemplateRef<any>;
  headerTemplate: TemplateRef<any>;
  fieldTemplate: TemplateRef<any>;

  @ContentChildren(ReverseTableTemplateDirective) templates: QueryList<ReverseTableTemplateDirective>;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.values && changes.values.currentValue && this.columns) {
      const viewValues = _.chunk(changes.values.currentValue, this.columns)
      const last = viewValues[viewValues.length - 1]
      if (last.length !== this.columns) {
        console.log(last.length - this.columns);
        _.times(this.columns - last.length, () => last.push({}))
      }
      this.viewValues = viewValues
    }
  }

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'body':
          this.bodyTemplate = item.template;
          break;
        case 'field':
          this.fieldTemplate = item.template;
          break;
      }
    });
  }


}
