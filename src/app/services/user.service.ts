import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/IUser';
import { environment} from '../../environments/environment';
import { async } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async GetAll(): Promise<IUser[]> {
    return await this.http.get<IUser[]>(environment.ApiUrl + "/User/GetAll").toPromise()
  }

  async GetById(id: number): Promise<IUser> {
    return await this.http.get<IUser>(environment.ApiUrl + "/User/GetById/" + id).toPromise()
  }

  async Update(data: any): Promise<any> {
    return await this.http.put<any>(environment.ApiUrl+"/User/Update",data).toPromise()
  }

  async Delete(id: number): Promise<any> {
    return await this.http.delete<any>(environment.ApiUrl + "/User/Delete/"+id).toPromise()
  }

  async Add(data: any): Promise<any> {
    return await this.http.post<any>(environment.ApiUrl +"/User/Create",data).toPromise()
  }
}
