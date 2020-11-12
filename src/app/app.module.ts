import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { SunbirdModule } from 'sunbird';
import { FancyTreeComponent } from './fancy-tree/fancy-tree.component';
import { QumlLibraryModule } from 'sunbird-quml-player';

import { CkeditorToolComponent } from './ckeditor-tool/ckeditor-tool.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentTypesComponent } from './content-types/content-types.component';
import { SbFormComponent } from './sb-form/sb-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FancyTreeComponent,
    CkeditorToolComponent,
    ContentTypesComponent,
    SbFormComponent
  ],
  imports: [
    BrowserModule, CarouselModule.forRoot(),
    BrowserAnimationsModule, QumlLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
