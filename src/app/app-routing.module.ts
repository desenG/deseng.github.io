import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', },
  {
    path: 'home',
    loadChildren: () => import('./modules/home').then(m => m.HomeModule)
  },
  { path: 'counter', component: CounterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
