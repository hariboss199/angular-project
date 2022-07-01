import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public Users =[];
  constructor(private user:UsersService) { }

  ngOnInit() {
    this.Users=this.user.getDetails();
  }

}
