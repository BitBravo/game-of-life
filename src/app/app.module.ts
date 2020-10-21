import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { GenerationService } from './services';
import { AppComponent } from './app.component';
import { FrameComponent } from './components';


@NgModule({
  declarations: [AppComponent, FrameComponent],
  imports: [BrowserModule, FormsModule, SnotifyModule],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
    GenerationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
