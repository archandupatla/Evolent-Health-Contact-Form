import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactsDisplayComponent } from './contacts-display/contacts-display.component';
import { ContactService } from './shared/contacts.service';
import { StoreContacts } from './shared/store-contacts.service';
import { ContactsFormComponent } from './contacts-form/contacts-form.component';
import { ValidatorFunctions } from './shared/validators.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactsDisplayComponent,
    ContactsFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService, StoreContacts, ValidatorFunctions],
  bootstrap: [AppComponent]
})
export class AppModule { }
