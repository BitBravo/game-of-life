import { Component, ViewChild } from '@angular/core';
import { FrameComponent } from './frame';

@Component({
  selector: 'gol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(FrameComponent)
  private frame: FrameComponent;

  noCols = 35;
  noRows = 17;
  cellSize = 20;
  showDecay = false;
  empty = false;


  runUniverse() {
    this.frame.run();
  }

  clearUniverse() {
    this.empty = true;
    this.frame.clear();
  }

  restartUniverse() {
    this.empty = false;
    this.frame.restart();
  }

  isEmpty() {
    console.log(this.empty);  
    return this.empty;
  }

}
