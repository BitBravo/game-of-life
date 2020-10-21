import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FrameComponent } from "./components";
import { GenerationService } from "./services";
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, FrameComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [GenerationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
