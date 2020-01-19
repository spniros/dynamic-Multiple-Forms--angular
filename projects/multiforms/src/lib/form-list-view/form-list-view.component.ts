


import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormDataList } from '../viewforms/FormDataList';
import { memoize } from '../memoize';

@Component({
  selector: 'lib-form-list-view',
  templateUrl: './form-list-view.component.html',
  styleUrls: ['./form-list-view.component.css']
})
export class FormListViewComponent implements OnInit {

  public isPopUp: boolean = false;
  public formId: any;
  public selectedTittle: any;
  modalRef: BsModalRef;
  public currentRole: any;
  @Input() createdFormDetailsList: FormDataList[];
  public formDetails: any;
  @Output() itemsSave: EventEmitter<any> = new EventEmitter();

  public formDataWithPermission: FormDataList[];

  public isEditFormView: boolean = false;
  // @ViewChild('lgModal') lgModal: ModalDirective;

  constructor(public modalService: BsModalService) {
  
      //console.log(this.createdFormDetailsList)
  }



  ngOnInit() {

  }


  showFormSelected(template, item) {
    this.formId = item.formId;
    this.formDetails = item;
    this.selectedTittle = item.formTittle;
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));

  }


  formDataGet(event) {
    this.itemsSave.emit(event);

  }

  // @memoize()
  // permissionData(item) {
  //   return item.permissionRoles.some(x => x === this.currentRole);
  // }


  elementEditForm: any;
  editForm(item) {
  //  console.log(item);
    this.isEditFormView = true;
    this.elementEditForm = item;
  }

  vieMode(value) {
    if (value == 'popup') { this.isPopUp = true; }
    else { this.isPopUp = false; }
  }
}
