import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RecipeDisplayComponent } from "./recipe-display/recipe-display.component";
import { RecipeFormComponent } from "./recipe-form/recipe-form.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";

@NgModule({
  declarations: [
    RecipeDisplayComponent,
    RecipeFormComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    RecipeDisplayComponent,
    RecipeFormComponent,
    RecipeListComponent
  ]
})
export class RecipeModule {}
