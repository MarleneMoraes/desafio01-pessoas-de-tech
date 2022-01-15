import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { SectionComponent } from './component/section/section.component';
import { SectionFormComponent } from './component/section-form/section-form.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SectionComponent,
    SectionFormComponent,
    FooterComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  
  providers: [],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
