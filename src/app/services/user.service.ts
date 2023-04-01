import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/IUser';
import { environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async GetAll(): Promise<IUser[]> {
    return await this.http.get<IUser[]>(environment.ApiUrl +"/User/GetAll").toPromise()
  }
}
