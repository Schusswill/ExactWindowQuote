import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuoteBuilderComponent } from './quote-builder/quote-builder.component';
import { WindowFormComponent } from './window-form/window-form.component';

@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      HomepageComponent,
      QuoteBuilderComponent,
      WindowFormComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
