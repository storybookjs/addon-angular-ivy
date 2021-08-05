// tslint:disable: max-classes-per-file
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'lf-edit-card-edition',
})
export class EditCardEditionDirective {}

@Directive({
  selector: 'lf-edit-card-readonly',
})
export class EditCardReadonlyDirective {}

@Directive({
  selector: 'ng-template[lfEditCardEdition]',
})
export class EditCardEditionContentDirective {
  constructor(readonly _template: TemplateRef<any>) {}
}

@Directive({
  selector: 'ng-template[lfEditCardReadonly]',
})
export class EditCardReadonlyContentDirective {
  constructor(readonly _template: TemplateRef<any>) {}
}
