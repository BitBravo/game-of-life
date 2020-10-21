import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { SnotifyModule, SnotifyService, ToastDefaults } from "ng-snotify";

import { AppComponent } from "./app.component";
import { FrameComponent } from "./components";
import { GenerationService } from "./services";

@NgModule({
  declarations: [AppComponent, FrameComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, SnotifyModule],
  providers: [
    { provide: "SnotifyToastConfig", useValue: ToastDefaults },
    SnotifyService,
    GenerationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
