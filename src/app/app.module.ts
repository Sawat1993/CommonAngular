import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Importing Components */
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';

/**
 * Importing Modules
 */
import { AppRoutingModule } from './/app-routing.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
