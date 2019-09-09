import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/** Importing Components */
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';

/**
 * Importing Modules
 */
import { AppRoutingModule } from './/app-routing.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';

/** Import Services */
import { AsyncHttpService } from './provider/async-http.service';
import { TokenInterceptor } from './provider/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }