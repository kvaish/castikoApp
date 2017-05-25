import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { FileUploader } from 'ng2-file-upload/';
import { HttpModule } from '@angular/http';
const URL = 'http://localhost:3000/uploads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent {
  title = 'app works!';
  uploader:FileUploader = new FileUploader({url: URL});
  hasBaseDropZoneOver:boolean = false;
  hasAnotherDropZoneOver:boolean = false;

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
