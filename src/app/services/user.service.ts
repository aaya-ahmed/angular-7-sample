import { Injectable } from '@angular/core';
import { user, usersListResponce } from '../models/user';
import { BaseService } from './base/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<user,usersListResponce> {

  constructor(http: HttpClient) {
    super(http); 
    this.controller = 'users';
  }
}
