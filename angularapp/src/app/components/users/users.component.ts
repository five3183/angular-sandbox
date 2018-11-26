import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[]
  showExtended: boolean = true
  loaded: boolean = false
  enableAdd: boolean = false
  showUserForm: boolean = false
  @ViewChild('userForm')form: any

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@gmail.com',
        isActive: true,
        registered: new Date('11/01/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jeff',
        lastName: 'Doe',
        email: 'jeff@gmail.com',
        isActive: false,
        registered: new Date('10/01/2018 08:30:00'),
        hide: true
      }
    ]
    this.loaded = true
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('form is not valid')
    } else {
      value.isActive = true
      value.registered = new Date()
      value.hide = true
      this.users.unshift(value)

      this.form.rest()
    }
  }
}
