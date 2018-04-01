import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLSearchParams, Headers } from '@angular/http';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(){
    let url = 'https://us-central1-fir-app-6a89b.cloudfunctions.net/httpEmail';
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    params.set('to', 'rah48saw@gmail.com');
    params.set('from', 'rahulsawant811@gmail.com');
    params.set('content', 'Test mail sent from sendgrid api');

    return this.http.post(url, params, headers)
                    .toPromise()
                    .then(res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })
  }

}
