
import { MultiformsComponent } from './multiforms.component';
import { DynamicformsComponent } from './dynamicforms/dynamicforms.component';
import { FormelementsetupComponent } from './formelementsetup/formelementsetup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewformsComponent } from './viewforms/viewforms.component';
import { FormListViewComponent } from './form-list-view/form-list-view.component';


import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [MultiformsComponent, DynamicformsComponent, 
    FormelementsetupComponent, ViewformsComponent, FormListViewComponent],
  imports: [
    ReactiveFormsModule, CommonModule, ModalModule.forRoot(),
    HttpClientModule,NgSelectModule, FormsModule  ,AccordionModule.forRoot()
  ],
  
  exports: [MultiformsComponent,DynamicformsComponent, FormelementsetupComponent,FormListViewComponent]


})
export class MultiformsModule { }
