import { Component, NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "sb-button",
  templateUrl: "button.component.html",
  styleUrls: ["button.component.scss"]
})
export class ButtonComponent {
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule {
}
