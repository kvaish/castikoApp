import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdSidenavModule} from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MdCardModule} from '@angular/material';
import { UploadComponent } from './components/upload/upload.component';
import { DropzoneModule } from 'angular2-dropzone-wrapper';
import { DropzoneConfigInterface } from 'angular2-dropzone-wrapper';

<<<<<<< HEAD

import { DataTablesModule } from 'angular-datatables';
=======
>>>>>>> origin/shubhamvohra
import { UploadVideoComponent } from './upload-video/upload-video.component';





declare var cors_video_upload:any;
<<<<<<< HEAD
=======
 

import { DataTablesModule } from 'angular-datatables';
>>>>>>> origin/shubhamvohra


const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  server: 'https://httpbin.org/post',
  maxFilesize: 50,

<<<<<<< HEAD

  acceptedFiles: 'videos/*'
=======
  acceptedFiles: 'image/*',

>>>>>>> origin/shubhamvohra
};

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    UploadComponent,
    UploadVideoComponent
=======
    UploadVideoComponent,
    NavbarComponent,
    UploadComponent

>>>>>>> origin/shubhamvohra
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdSidenavModule,
    MdCardModule,
    DropzoneModule,
    DropzoneModule.forRoot(DROPZONE_CONFIG),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
