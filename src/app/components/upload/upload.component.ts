import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'angular2-dropzone-wrapper';
import {ViewEncapsulation} from '@angular/core';
import { UploadService } from '../../service/upload.service';
import {DomSanitizer} from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { DragulaService } from 'ng2-dragula';



declare var jQuery: any;
@Pipe({ name: 'safe' })

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
  	youtubelink:string
  }];
 
  constructor(private uploadservice:UploadService,private domSanitizer : DomSanitizer,private dragulaService: DragulaService) {
        dragulaService.setOptions('fifth-bag', {
      copy: true
    });
  }

  youtube = function(youtubelink:string) {
    var youtubeurl = "https://img.youtube.com/vi/";
   return this.domSanitizer.bypassSecurityTrustResourceUrl(youtubeurl+youtubelink+'/0.jpg');
  }

  ngOnInit() {
  	this.uploadservice.getRoles()
    .subscribe(roles=>{this.roles=roles});
    
  }

    onItemDrop(e: any) {
        // Get the dropped data here
        //this.droppedItems.push(e.dragData);
    }

}
