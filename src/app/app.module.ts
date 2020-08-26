import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';

import { CatalogComponent } from './core/cat/cat.component';
import { IndexComponent } from './core/index/index.component';
import { DeliveryComponent } from './core/delivery/delivery.component';
import { ContactsComponent } from './core/contacts/contacts.component';
import { BagComponent } from './core/bag/bag.component';
import { CabComponent } from './core/cab/cab.component';
import { PayComponent } from './core/pay/pay.component';

import { CatalogService } from './model/catalog.service';
import { BagService } from './model/bag.service';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'cat', component: CatalogComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'pay', component: PayComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'bag', component: BagComponent },
  { path: 'cabinet', component: CabComponent },
];

@NgModule({
  declarations: [
    AppComponent, CatalogComponent,  
    IndexComponent, DeliveryComponent, PayComponent,
    ContactsComponent, BagComponent, CabComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES), MenubarModule, MenuModule, ButtonModule, DataViewModule, DialogModule, 
    TableModule, InputTextModule
  ],
  providers: [CatalogService, BagService ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
