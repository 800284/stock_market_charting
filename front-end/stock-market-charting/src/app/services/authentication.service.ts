import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedInUser: any = null;
  logInFlag: boolean = false;
  constructor(private httpClient: HttpClient) { }
  private authenticationUrl = environment.baseUrl + '/authentication-service/stock-market-charting/authenticate';
  private token: string;
  authenticate(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ':' + password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
    return this.httpClient.get(this.authenticationUrl, { headers });
  } 

  public setToken(token: string) {
    this.token = token;
  }

  public getToken() {
    return this.token;
  }
  setLoggedinUser(userName) {
    this.loggedInUser = userName;
  }
  setLoginFlag(){
    this.logInFlag=true;
  }
  getLoggedinUser() {
    return this.loggedInUser
  }
  isLogin() {
    return this.logInFlag;
  }
  logout() {
    this.loggedInUser = null;
    this.logInFlag = false;
  }
}
