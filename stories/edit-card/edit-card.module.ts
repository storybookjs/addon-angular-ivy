import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { EditCardComponent } from './edit-card/edit-card.component';
import {
  EditCardEditionContentDirective,
  EditCardEditionDirective,
  EditCardReadonlyContentDirective,
  EditCardReadonlyDirective,
} from './edit-card/edit-card.directive';

@NgModule({
  declarations: [
    EditCardComponent,
    EditCardReadonlyDirective,
    EditCardReadonlyContentDirective,
    EditCardEditionDirective,
    EditCardEditionContentDirective,
  ],
  imports: [CommonModule, MatCardModule, MatButtonModule, PortalModule],
  exports: [
    EditCardComponent,
    EditCardReadonlyDirective,
    EditCardReadonlyContentDirective,
    EditCardEditionDirective,
    EditCardEditionContentDirective,
  ],
})
export class EditCardModule {}
