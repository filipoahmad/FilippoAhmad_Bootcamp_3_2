import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomerComponent } from './customer/customer.component';



@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    CustomerComponent,

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : '', component : RoomListComponent}
    ])
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
