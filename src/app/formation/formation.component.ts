import { Component } from '@angular/core';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {
  
  nom="Mahmoud"
  email="lajimi@gmail.com"
  tel="28435532"
listFormation:Array<any>|undefined  
  constructor(private serviceFormation:FormationService){

this.listFormation= this.serviceFormation.getFormation()
  }


  
  

}
