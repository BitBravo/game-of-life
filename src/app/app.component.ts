import { Component, ViewChild } from "@angular/core";
import { FrameComponent } from "./components";

@Component({
  selector: "gol-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild(FrameComponent)
  private frame: FrameComponent;

  nCols = 35;
  nRows = 17;
  cellSize = 20;
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
