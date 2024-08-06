import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { SobreComponent } from './sobre/sobre.component';
import { StreamComponent } from './stream/stream.component';
import { VideosComponent } from './videos/videos.component';
import { FooterComponent } from './footer/footer.component';
import { NovidadeComponent } from './novidade/novidade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SobreComponent,
    StreamComponent,
    VideosComponent,
    FooterComponent,
    NovidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
