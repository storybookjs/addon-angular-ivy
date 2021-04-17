import { Component, NgModule } from "@angular/core";

@Component({
  selector: 'sb-button',
  template: `
    <button>click me</button>
  `,
  styles: []
})
export class ButtonComponent {
}

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class ButtonModule {
}
