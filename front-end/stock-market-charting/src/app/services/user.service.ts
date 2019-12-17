import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
