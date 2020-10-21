import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { GenerationService, cell, MAX_INTENSITY, MIN_INTENSITY } from 'app/services';

const GENERATION_DURATION = 15200;

@Component({
  selector: 'gol-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit, OnDestroy {

  public cells: cell[][];
  private timer: Observable<number>;  
  private tickSub: Subscription;
  private stagnation: boolean;
  private running: boolean;

  @Input() noCols: number;
  @Input() noRows: number;
  @Input() cellSize: number;
  @Input() showDecay: boolean;

  constructor(private generationService: GenerationService) {
  }

  ngOnInit() {
    this.cells = this.generationService.createFreshGeneration(this.noRows, this.noCols);    
    this.run();
    this.generationService.onStagnation.subscribe(() => {
      this.stagnation = true;
    });
  }

  ngOnDestroy() {
    this.tickSub.unsubscribe();
  }

  restart() {
    this.stagnation = false;
    this.tickSub.unsubscribe();
    this.cells = this.generationService.createFreshGeneration(this.noRows, this.noCols);
  }

  clear() {
    this.stagnation = false;
    this.tickSub.unsubscribe();
    this.cells = this.generationService.createFreshSpace(this.noRows, this.noCols);
  }

  run() {
    this.running = true;
    this.timer = interval(GENERATION_DURATION);
    this.tickSub = this.timer.subscribe(()=> {
      this.cells = this.generationService.nextGeneration(this.cells);
    });
  }

  pause() {
    this.running = false;
    this.tickSub.unsubscribe();
  }

  toggle() {
    this.running ? this.pause() : this.run();
  }

  cellClicked(cell: cell) {
    if (this.running) return;
    this.stagnation = false;
    this.generationService.resetStagnation();
    
    cell.alive = !cell.alive;
    cell.intensity = (cell.alive ? MAX_INTENSITY : MIN_INTENSITY)
  }

  getCellColor(cell) {
    let intensity = this.showDecay ? cell.intensity : cell.alive ? MAX_INTENSITY : MIN_INTENSITY;
    if (this.stagnation) {
      if (!cell.alive) return 0; 
      return 'rgb(' + intensity + ', 0, 0)';  
    }
    return 'rgb(' + intensity + ', ' + intensity + ', ' + intensity + ')';
  }
}
