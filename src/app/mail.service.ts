import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

//import { URLSearchParams, Headers } from '@angular/http';

//import { IEmployee } from './employee';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  // private _url:string = 'assets/data/mydata.json';
  // getEmployees(): Observable<IEmployee[]>{
  //   return this.http.get<IEmployee[]>(this._url);
  // }

  sendMail(){
    let url = 'https://us-central1-fir-app-6a89b.cloudfunctions.net/httpEmail';

    //let params: URLSearchParams = new URLSearchParams();
    // let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    // params.set('to', 'rah48saw@gmail.com');
    // params.set('from', 'rahulsawant811@gmail.com');
    // params.set('content', 'Test mail sent from sendgrid api');

    let headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) };

    let params = new HttpParams();
    params = params.append('to', 'rah48saw@gmail.com');
    params = params.append('from', 'rahulsawant811@gmail.com');
    params = params.append('content', 'Test mail sent from sendgrid api');

    return this.http.post(url, params, headers)
                    .map(response => console.log(response));

                    // .toPromise()
                    // .then(res => {
                    //   console.log(res)
                    // })
                    // .catch(err => {
                    //   console.log(err)
                    // })
  }

}
