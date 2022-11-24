import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootheaderComponent } from './bootheader/bootheader.component';
import { BootviewComponent } from './bootview/bootview.component';
import { UserserviceService } from './service/userservice.service';

@NgModule({
  declarations: [
    AppComponent,
    BootheaderComponent,
    BootviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
