import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";

const MODULES = [CommonModule, MatGridListModule, MatButtonModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule {}
