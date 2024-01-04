import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit  {

  constructor(private routerA: Router){}
  goAbout(){
      this.routerA.navigateByUrl('/about')
  }
   ngOnInit(){

   }
  name1='Lajimi'
  username1=""
  name='Lajimi'
  username="Mahmoud"
  email="lajimi@gmail.com"
  counter=1
 

  getEmail(){
    return this.email
  }
  changer(data1:any,data2:any,data3:any){
    this.name = data1
    this.username = data2
    this.email = data3
    
      }
    reset(){
      this.name="Lajimi"
      this.username="Mahmoud"
      this.email="lajimi@gmail.com"
     
    
    }
    decrementer(){
    --this.counter
    }
    incrementer(){
      ++this.counter
    }
   
}
