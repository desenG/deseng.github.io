import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { SharedModule, HeaderComponent, FooterComponent } from './shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // for FullCalendar!


import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CalendarModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
