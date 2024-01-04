import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationService  {
  listFormations!:Array<any> 
  
 

  constructor() { 
  this.listFormations=[
    {nomf:"Angular"},{nomf:"Symfony"},{nomf:"Microsoft"}
  ]
 
   
  }
  getFormation(){
return this.listFormations
  }

}
