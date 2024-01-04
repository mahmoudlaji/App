import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path:'app',component:AppComponent},
  {path:'about',component:AboutComponent},
  {path:'user',component:UserComponent},
  {path:'formation',component:FormationComponent},
  {path:'product',component:ProductComponent},
  {path:'calculator',component:CalculatorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
