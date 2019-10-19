import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QuoteBuilderComponent } from './quote-builder/quote-builder.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'quote-builder', component: QuoteBuilderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
