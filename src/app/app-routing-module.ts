import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comicscomponent } from './components/comicscomponent/comicscomponent';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';

const routes: Routes = [
 
  {path:"", component: Comicscomponent},
  {path:"personas", component: PersonasApiComponent},
  {path:"coches", component: CochesApiComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  




}
