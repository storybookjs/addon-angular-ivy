import { TemplatePortal } from '@angular/cdk/portal';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { EditCardEditionContentDirective, EditCardReadonlyContentDirective } from './edit-card.directive';

@Component({
  selector: 'lf-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCardComponent implements AfterContentInit {
  @Input()
  set readonly(readonly: boolean) {
    this.readonlyChange.emit(readonly);
    this._readonly = readonly;
  }
  get readonly(): boolean {
    return this._readonly;
  }

  @Input()
  hideEditButton = false;
  @Input()
  skeleton = false;
  @Input()
  skeletonContentTpl: TemplateRef<any>;

  @Output()
  readonlyChange = new EventEmitter<boolean>();

  /** Content that will be rendered lazily */
  @ContentChild(EditCardEditionContentDirective) lazyEditionContent: EditCardEditionContentDirective;
  @ContentChild(EditCardReadonlyContentDirective) lazyReadonlyContent: EditCardReadonlyContentDirective;

  readonlyPortal: TemplatePortal;
  editionPortal: TemplatePortal;
  private _readonly = true;
  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  ngAfterContentInit(): void {
    if (this.lazyReadonlyContent) {
      this.readonlyPortal = new TemplatePortal(this.lazyReadonlyContent._template, this.viewContainerRef);
    }
    if (this.lazyEditionContent) {
      this.editionPortal = new TemplatePortal(this.lazyEditionContent._template, this.viewContainerRef);
    }
  }

  toggleEditionMode() {
    this.readonly = !this.readonly;
  }
}
