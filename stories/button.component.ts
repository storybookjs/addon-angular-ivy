import { Component, Input, NgModule, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BehaviorSubject } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "sb-button",
  templateUrl: "button.component.html",
  styleUrls: ["button.component.scss"]
})
export class ButtonComponent implements OnInit {

  @Input() basicLabel = 'Basic';

  isVisible$ = new BehaviorSubject(false);

  ngOnInit() {
    setTimeout(() => this.isVisible$.next(true), 200);
  }

  toggle() {
    this.isVisible$.next(!this.isVisible$.value);
  }
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule {
}
