import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Observable, Subscription, interval } from "rxjs";
import { GenerationService, cell } from "app/services";

@Component({
  selector: "gol-frame",
  templateUrl: "./frame.component.html",
  styleUrls: ["./frame.component.scss"],
})
export class FrameComponent implements OnInit, OnDestroy {
  public cells: cell[][];
  private timer: Observable<number>;
  private stagnation: boolean;
  private running: boolean;
  private tickSub: Subscription;

  @Input() nCols: number = 35;
  @Input() nRows: number = 17;
  @Input() cellSize: number = 15;
  @Input() duration: number = 0.5;

  constructor(private generationService: GenerationService) {}

  ngOnInit() {
    this.cells = this.generationService.createInitalGrid(
      this.nRows,
      this.nCols
    );
    this.generationService.onStagnation.subscribe(() => {
      this.stagnation = true;
    });
  }

  ngOnDestroy() {
    this.tickSub.unsubscribe();
  }

  run() {
    this.running = true;
    this.timer = interval(this.duration * 1000);
    this.tickSub = this.timer.subscribe(() => {
      this.cells = this.generationService.nextGeneration(this.cells);
    });
  }

  pause() {
    this.running = false;
    this.tickSub.unsubscribe();
  }

  restart() {
    this.stagnation = false;
    this.tickSub.unsubscribe();
    this.cells = this.generationService.createInitalGrid(
      this.nRows,
      this.nCols
    );
  }

  cellClicked(cell: cell) {
    this.stagnation = false;
    this.generationService.resetStagnation();
    cell.alive = !cell.alive;
  }
}
