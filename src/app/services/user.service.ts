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
    return await this.http.get<IUser[]>(environment.ApiUrl + "/User/GetAll").toPromise()
  }

  async GetById(id: number): Promise<IUser> {
    return await this.http.get<IUser>(environment.ApiUrl + "/User/GetById/" + id).toPromise()
  }

  async Update(data: any): Promise<number> {
    return this.http.put<number>(environment.ApiUrl+"/User/Update",data).toPromise()
  }

  async Delete(id: number): Promise<number> {
    return this.http.delete<number>(environment.ApiUrl + "/User/Delete/"+id).toPromise()
  }
}
