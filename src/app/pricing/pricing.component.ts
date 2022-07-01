import { Component, OnInit } from '@angular/core';
import{UsersService} from '../services/users.service';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
public Users =[];
  constructor(private user:UsersService) { }

  ngOnInit() {
this.Users=this.user.getDetails();
  }

}
