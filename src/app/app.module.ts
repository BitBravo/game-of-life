import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UniverseComponent } from './universe/universe.component';
import { GenerationsService } from './services/generations.service';

@NgModule({
  declarations: [
    AppComponent,
    UniverseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    GenerationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
