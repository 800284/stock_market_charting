import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../site/User';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  addUser(user: User) {
    let url = environment.baseUrl + "/authentication-service/stock-market-charting/users";
    return this.httpClient.post<any>(url, user);
  }
  updateUser(user:User){
    
    let url = environment.baseUrl + "/authentication-service/stock-market-charting/users/update-user"
    let token = 'Bearer ' + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.put(url,user,httpOptions);
  }

  getUser(userName:String){
    let url = environment.baseUrl + "/authentication-service/stock-market-charting/users/get-user/" + userName;
    let token = 'Bearer ' + this.authService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': token
      })
    };
    return this.httpClient.get(url,httpOptions);
  }
  getUserStatus(username:String){
    let url = environment.baseUrl + "/authentication-service/stock-market-charting/users/" + username;
    return this.httpClient.get(url);
  
  }
}
