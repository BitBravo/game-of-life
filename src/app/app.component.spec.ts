import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FrameComponent } from './components';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { GenerationService } from './services';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule, SnotifyModule
      ],
      declarations: [
        AppComponent, FrameComponent
      ],
      providers: [
        { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
        SnotifyService,
        GenerationService,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as nRows '17'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.nRows).toEqual(17);
  });
});
