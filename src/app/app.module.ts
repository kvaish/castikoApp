import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DropzoneModule } from 'angular2-dropzone-wrapper';
import { DropzoneConfigInterface } from 'angular2-dropzone-wrapper';
import { UploadVideoComponent } from './upload-video/upload-video.component';


declare var cors_video_upload:any;
 
const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address: 
  server: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    AppComponent,
    UploadVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropzoneModule.forRoot(DROPZONE_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
