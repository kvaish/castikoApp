import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FileUploadModule } from 'ng2-file-upload';
/*import { DropzoneModule } from 'angular2-dropzone-wrapper';
import { DropzoneConfigInterface } from 'angular2-dropzone-wrapper';
const DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  server: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule
    //DropzoneModule.forRoot(DROPZONE_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
