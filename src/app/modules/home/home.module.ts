import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from 'primeng/dropdown';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../../shared';
import { TabMenuModule } from 'primeng/tabmenu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { InplaceModule } from 'primeng/inplace';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    DropdownModule,
    MatMenuModule,
    MatListModule,
    TabMenuModule,
    SelectButtonModule,
    ToolbarModule,
    InplaceModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ButtonModule,
    AutoCompleteModule,
    CheckboxModule,
    CalendarModule,
    ChipsModule,
    InputTextareaModule,
    ButtonModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers: [DatePipe],
  entryComponents: []
})
export class HomeModule { }
