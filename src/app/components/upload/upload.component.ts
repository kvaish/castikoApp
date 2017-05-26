import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'angular2-dropzone-wrapper';
import {ViewEncapsulation} from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UploadComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
