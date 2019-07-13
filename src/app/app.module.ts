import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { IntroComponent } from './intro/intro.component';
import { NewsBriefComponent } from './news-brief/news-brief.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'intro', component: IntroComponent},
      { path: 'map', component: MapComponent},
    ])],
  declarations: [AppComponent, HomeComponent, MapComponent, IntroComponent, NewsBriefComponent, SummaryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
