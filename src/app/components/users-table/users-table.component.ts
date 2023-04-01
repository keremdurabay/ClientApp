import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../Models/IUser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  UserForm = new FormGroup({
    id:new FormControl(),
    name: new FormControl("", Validators.required),
    surname: new FormControl("", Validators.required),
  fullName:new FormControl("")
  })


  users:IUser[]
  constructor(private userService: UserService) { }
  async ngOnInit(): Promise<void> {
    this.users = await this.userService.GetAll()
    console.log(this.users)
  }

  async Update(id: number): Promise<void> {
    this.UserForm.setValue(await this.userService.GetById(id))  
  }
}
