import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'angular2-dropzone-wrapper';
import {ViewEncapsulation} from '@angular/core';
import { UploadService } from '../../service/upload.service';
declare var jQuery: any;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[UploadService]
})
export class UploadComponent implements OnInit {
  roles:[{
  	name:string,
  	sex:string,
  }];
 
  constructor(private uploadservice:UploadService) {

  }
  ngOnInit() {
  	this.uploadservice.getRoles()
    .subscribe(roles=>{this.roles=roles});
  }

}
