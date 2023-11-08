import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/core/home-page/home-page.component';

const routes: Routes = [
  { path: 'recipe', loadChildren: () => import('./modules/feature/recipe/recipe.module').then(m => m.RecipeModule) },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
