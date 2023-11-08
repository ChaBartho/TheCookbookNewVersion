import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CoreModule } from './modules/core/core.module';
import { ProfileModule } from './modules/feature/profile/profile.module';
import { RecipeModule } from './modules/feature/recipe/recipe.module';
import { ShoppingListModule } from './modules/feature/shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    CoreModule,
    ProfileModule,
    RecipeModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
