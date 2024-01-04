import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  op=""
  color=""
  inputdata="0"
  result=""
  operation:boolean | undefined

  colorv(){
    this.color ="green"
  }
  colorr(){
    this.color ="red"
  }colorb(){
    this.color="white"
  }

  getOp(data:any){

    this.op=data
    this.operation=true
    //this.inputdata=data
  }
  getNbr(data:any){
    let val=this.inputdata
    if(this.operation){
      this.result=this.calcul(Number(val),Number(data),this.op) 
    }
    if((this.inputdata.includes('.')) && (this.operation==false))
      {
        this.inputdata+=data
        this.result=this.calcul(Number(val),Number(data),this.op)

      }else this.inputdata=data


}
getVrg(data:any){
  this.inputdata+=data
  this.operation=false
}
reset(){
  this.inputdata="0"
  this.operation=false
}
calcul(nbr1:any,nbr2:any,op:string){
  
  if(op=="+")
    return nbr1+nbr2
  
  if(op=="-")
    return nbr1-nbr2
  
  if(op=="*")
    return nbr1*nbr2
  
  if(op=="/")
    return nbr1/nbr2
  
}
Result(): void{
    this.inputdata=this.result
  }
}
  

