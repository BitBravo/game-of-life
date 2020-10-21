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
  empty = false;

  startFrame() {
    this.frame.run();
  }

  clearFrame() {
    this.empty = true;
    this.frame.clear();
  }

  restartFrame() {
    this.empty = false;
    this.frame.restart();
  }
}
