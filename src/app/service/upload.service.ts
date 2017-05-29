import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { UploadComponent } from '../components/upload/upload.component';
import 'rxjs/add/operator/map';

@Injectable()
export class UploadService {

  constructor(private http:Http) { }

  //get details of all roles
  getRoles(){
   return this.http.get('http://localhost:3000/api/getRoles')
   .map(res=>res.json());
  }

  //edit roles information
  editRoles(id){
    return this.http.post('http://localhost:3000/api/editRoles/',+id)
 	  .map(res=>res.json());
  }
}
