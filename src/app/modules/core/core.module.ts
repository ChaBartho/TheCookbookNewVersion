import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page/home-page.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class CoreModule {}
