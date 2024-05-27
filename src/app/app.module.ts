import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from './api/login.service';
import { UsnService } from './api/usn.service';
import { RpcService } from './api/rpc.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ParametriTelemetryComponent } from './parametri-telemetry/parametri-telemetry.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ParametriTelemetryComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginService, UsnService, RpcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
