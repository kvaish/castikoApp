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
<<<<<<< HEAD
import { DataTablesModule } from 'angular-datatables';
=======
import { UploadVideoComponent } from './upload-video/upload-video.component';
>>>>>>> origin/shubhamvohra

=======
import { UploadVideoComponent } from './upload-video/upload-video.component';

<<<<<<< HEAD

=======
>>>>>>> origin/shubhamvohra
declare var cors_video_upload:any;
 
>>>>>>> 700e0bff20b966b639aaf64e1817596b01446066
const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  server: 'https://httpbin.org/post',
  maxFilesize: 50,
<<<<<<< HEAD
<<<<<<< HEAD
  acceptedFiles: 'videos/*'
=======
  acceptedFiles: 'image/*'
>>>>>>> 700e0bff20b966b639aaf64e1817596b01446066
=======
  acceptedFiles: 'image/*'
>>>>>>> origin/shubhamvohra
};

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    NavbarComponent,
    UploadComponent
=======
    UploadVideoComponent
>>>>>>> 700e0bff20b966b639aaf64e1817596b01446066
=======
    UploadVideoComponent
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
