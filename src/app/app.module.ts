import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { HeadderComponent } from './headder/headder.component';

//My imports
import { SlickCarouselModule } from 'ngx-slick-carousel';
import * as $ from 'jquery';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule }   from '@angular/forms';
import { FreeEstimateComponent } from './free-estimate/free-estimate.component';
import { EmailSenderService } from './email-sender.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadderComponent,
    AboutComponent,
    FooterComponent,
    ContactsComponent,
    ProjectsComponent,
    FreeEstimateComponent
  ],
  imports: [
    BrowserModule,
    routing,
    SlickCarouselModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmailSenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
