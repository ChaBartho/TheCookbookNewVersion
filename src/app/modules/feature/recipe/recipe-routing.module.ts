import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDisplayComponent } from "./recipe-display/recipe-display.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";

const routes: Routes = [
  { path: 'create', component: RecipeFormComponent},
  { path: ':id', component: RecipeDisplayComponent },
  { path: '', component: RecipeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
