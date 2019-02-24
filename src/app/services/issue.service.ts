import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  //uri = 'http://localhost:4000';
  uri = 'https://heroku-angular-backend.herokuapp.com';

  constructor(private http: HttpClient) {
  }


  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  sortIssueById(id){
    return this.http.get(`${this.uri}/sort/issues/${id}`);
  }

 
}