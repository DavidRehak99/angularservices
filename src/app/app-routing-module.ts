import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comicscomponent } from './components/comicscomponent/comicscomponent';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';

const routes: Routes = [
 
  {path:"", component: Comicscomponent},
  {path:"personas", component: PersonasApiComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  




}
