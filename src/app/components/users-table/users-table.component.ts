import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IUser } from '../../Models/IUser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users:IUser[]
  constructor(private userService: UserService) { }
  async ngOnInit(): Promise<void> {
    this.users = await this.userService.GetAll()
    console.log(this.users)
  }
}
