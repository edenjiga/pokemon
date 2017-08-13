import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PokemonesComponent } from './pokemones/pokemones.component';

/* SERVICE */
import {PokemonesService} from './services/pokemones.service';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent,
    NavbarComponent,
    JumbotronComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PokemonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
