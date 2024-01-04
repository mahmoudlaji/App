import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  
 products=[ 
  {nom:'laptop',prix:'300',reference:'1'},
 {nom:'phone',prix:'200',reference:'2'},
 {nom:'tv',prix:'500',reference:'3'}
]


}
