import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  log(data){
    console.log('log sevice:', data);
  }

}