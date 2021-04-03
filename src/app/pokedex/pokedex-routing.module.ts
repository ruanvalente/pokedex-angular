import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from './pokedex.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', component: PokedexComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
