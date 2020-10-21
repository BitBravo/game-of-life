import { Component, ViewChild } from "@angular/core";
import { FrameComponent } from "./components";
import { SnotifyService } from "ng-snotify";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private toastrService: SnotifyService) {}

  @ViewChild(FrameComponent)
  private frame: FrameComponent;

  nRows = 17;
  nCols = 35;
  duration: number = 1;
  running = false;

  startFrame() {
    const { valid, msg } = this.validation();
    if (!valid) {
      this.showError(msg);
      return;
    }

    this.running = true;
    this.frame.run();
  }

  pauseFrame() {
    if(!this.running) return;

    this.running = false;
    this.frame.pause();
  }

  restartFrame() {
    if(!this.running) return;

    this.frame.restart();
    this.frame.run();
  }

  showError(text) {
    this.toastrService.error(text, "Validation Error", {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }

  changeAction(): void {
 }

  validation(): any {
    if (0.1 > this.duration || this.duration > 10) {
      return { valid: false, msg: "Duration value should be 0.1 ~ 10" };
    }
    if (this.nRows < 10) {
      return { valid: false, msg: "Rows should be large than 10" };
    }
    if (this.nCols < 20) {
      return { valid: false, msg: "Cols should be large than 20" };
    }
    return { valid: true };
  }
}
