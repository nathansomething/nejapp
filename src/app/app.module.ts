import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerService } from './customer.service';
import { CustomerComponent } from './customer/customer.component';
import { QueryInterfaceComponent } from './query-interface/query-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    QueryInterfaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
