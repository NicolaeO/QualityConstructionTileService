import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  constructor(private _http: HttpClient) { }

  sendEmail(data: any){
    return this._http.post('/api/sendMail', data);
  }
}
