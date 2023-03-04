import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ShowMedicineComponent } from './medicine/show-medicine/show-medicine.component';
import { AddMedicineComponent } from './medicine/add-medicine/add-medicine.component';
import  {MedicineApiService} from './medicine-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MedicineComponent,
    ShowMedicineComponent,
    AddMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MedicineApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
