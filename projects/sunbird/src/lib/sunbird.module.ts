import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SunbirdComponent } from './sunbird.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [SunbirdComponent, DisplayComponent],
  exports: [SunbirdComponent, DisplayComponent]
})
export class SunbirdModule { }
