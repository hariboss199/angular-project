import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }


  getDetails(){
  return [
{name:"Hemant",mobile:9205262451,class:"M.tech"},
{name:"Rajat",mobile:9205262454,class:"LLB"},
{name:"Ashish",mobile:9205262452,class:"M.Sc"},
{name:"Nandlal",mobile:9205262456,class:"MCA"},
{name:"vivek",mobile:9205262459,class:"BCA"},
{name:"Ramesh",mobile:9205262451,class:"B.tech"}


  ];

  }
}
