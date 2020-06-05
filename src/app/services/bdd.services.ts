import{ HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class BddService{


  constructor( private httpClient: HttpClient){

  }

  saveDataToUser(){
  //  this.httpClient.post('https://http-client-c2793.firebaseio.com/users.json', this.profileForm);
  }
}

