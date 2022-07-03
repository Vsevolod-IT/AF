import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const COMPONENTS: any[] = [];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...COMPONENTS,
  ],
  exports: [
    CommonModule,
    ...COMPONENTS,
  ],
})
export class SharedModule { }
