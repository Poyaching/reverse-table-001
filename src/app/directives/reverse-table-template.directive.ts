import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[rtTemplate]'
})
export class ReverseTableTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

  @Input() type: string;

  @Input('rtTemplate') name: string;
  
  getType(): string {
    return this.name;
  }

}

