import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from './api/login.service';
import { UsnService } from './api/usn.service';
import { RpcService } from './api/rpc.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { LoginCardComponent } from './login-card/login-card.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginCardComponent,
    CardComponent
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
