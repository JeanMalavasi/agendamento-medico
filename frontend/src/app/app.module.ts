import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
