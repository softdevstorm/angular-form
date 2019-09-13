import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SHA1} from 'crypto-js';
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  constructor(public http: HttpClient) {}
  public validatePassword(queryHash): any {
     const url = '/api/' + queryHash;

    const headers = new HttpHeaders({ 'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT'});
    return this.http.get(url, {responseType: 'text', headers:  new HttpHeaders().set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')});
  }
}
