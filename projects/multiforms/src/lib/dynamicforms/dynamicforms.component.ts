
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';

import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'lib-dynamicforms',
  templateUrl: './dynamicforms.component.html',
  styleUrls: ['./dynamicforms.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class DynamicformsComponent implements OnInit {
  public selectedRoles = [];
  public allRoles: any;

  disablePersonalisation: boolean = false
  public gridSetting: any;
  public isForm: boolean = false;
  public isSetUp: boolean = false;
  public isTittleReady: boolean = false;
  public initialForm = new FormGroup({
    formName: new FormControl('', Validators.required),
    gridClass: new FormControl('', Validators.required),
  });

  public formgroup = new FormGroup({});
  public htmlFormData: any[] = [];
  public createdFormDetails = new Object();
  public listOfCreatedFormDetails: any[] = [];
  public fieldType: string;
  public formTittle: string;
  isRepeatField: boolean = false;
  public isShowForm: boolean = false;

  //public personalizationService: PersonalizationService;
  @Output() createForm: EventEmitter<any> = new EventEmitter();
@Input() editFormElements:any;


  // modalRef: BsModalRef;
  constructor() { }


// // for edit
// @Output() change:EventEmitter<any>=new EventEmitter();
//   ngOnChanges() {

//     if(this.editFormElements){
//       console.log(this.editFormElements);
//       this.disablePersonalisation=true;
//       console.log("edit mode");
//       for (let i = 0; i < this.editFormElements.htmlMetaData.length; i++) {
//         this.editFormElements.htmlMetaData[i].fieldName= this.editFormElements.htmlMetaData[i].name
//         this.formgroup.addControl(this.editFormElements.htmlMetaData[i].name, new FormControl(''));
//         this.htmlFormData.push(this.editFormElements.htmlMetaData[i]);
//       }
//       this.gridSetting=this.editFormElements.gridClass;
//       this.formTittle=this.editFormElements.formTittle;
//       this.isTittleReady=true;
//       this.isForm = true;
//       this.isSetUp = false;
//     }
//     else{
//       console.log("add mode");
//     }
//   }
// // for edit end


  ngOnInit() {
    
   
  }




  

  createFormElements(selectedField) {
    this.fieldType = selectedField;
    if (selectedField == "text" || selectedField == "textarea") {
      this.isSetUp = true;
    }
    else if (selectedField == "radio") {
      this.isSetUp = true;
    }
    else if (selectedField == "dropdown" || selectedField == "checkbox") {
      this.isSetUp = true;
    }
  }


  intialFormSave(value) {
  
    // console.log(value);
    // console.log(this.selectedRoles);
    this.formTittle = value.formName;
    this.gridSetting = value.gridClass;

    this.isTittleReady = true;
  }


  submitForm(values) {
  
    let Id = Math.floor(Math.random() * 25500) + 1; //should remove
    this.createdFormDetails = {
      formId: Id, //should remove 
      // permissionRoles: this.selectedRoles,
      gridClass: this.gridSetting,
      formTittle: this.formTittle,
      htmlMetaData: this.htmlFormData
    }
    this.selectedRoles = [];
    this.htmlFormData = [];
    this.formTittle = "";
    this.initialForm.controls["formName"].setValue("");
    this.initialForm.controls["gridClass"].setValue("");
    this.isTittleReady = false;

    this.createForm.emit(this.createdFormDetails);

    // console.log(this.createdFormDetails);
    // this.listOfCreatedFormDetails.push(this.createdFormDetails);
    // localStorage.setItem('createdformList', JSON.stringify(this.listOfCreatedFormDetails));
    // localStorage.setItem('createdform', JSON.stringify(this.createdFormDetails));
  }

  setUpElements(event) {

    let repeatFieldName: any = [];
    if (event.values) {
      repeatFieldName = this.htmlFormData.filter(x => x.name == event.values.fieldName);
      if (repeatFieldName.length > 0) { this.isRepeatField = true; }
      else { this.isRepeatField = false; }
    }



    if (event.values && repeatFieldName.length == 0) {
      if (event.values.fieldtype == "text" || event.values.fieldtype == "textarea") {
        this.formgroup.addControl(event.values.fieldName, new FormControl('', Validators.required));
        let formElements = {
          name: event.values.fieldName,
          type: event.values.fieldtype,
          isMandatory: event.values.isMandatory,
          className: this.gridSetting,
          placeHolder:event.values.placeHolder

        }
        this.htmlFormData.push(formElements);
        this.isForm = true;
        this.isSetUp = false;
      }
      else if (event.values.fieldtype == "radio" || event.values.fieldtype == "dropdown") {
        this.formgroup.addControl(event.values.fieldName, new FormControl(''));
        let formElements = {
          name: event.values.fieldName,
          type: event.values.fieldtype,
          options: event.values.options,
          isMandatory: event.values.isMandatory,
          className: this.gridSetting

        }
        this.htmlFormData.push(formElements);
        this.isForm = true;
        this.isSetUp = false;
      }
      else if (event.values.fieldtype == "checkbox") {
        this.formgroup.addControl(event.values.fieldName, new FormControl(''));
        let formElements = {
          name: event.values.fieldName,
          type: event.values.fieldtype,
          options: event.values.options,
          isMandatory: event.values.isMandatory,
          className: this.gridSetting

        }
        this.htmlFormData.push(formElements);
        this.isForm = true;
        this.isSetUp = false;
      }
    }
    if (event == "cancel") {
      // this.isForm = true;
      this.isSetUp = false;
      this.isRepeatField = false;
    }

  }


  moveItem(from, to) {

    // remove `from` item and store it
    var f = this.htmlFormData.splice(from, 1)[0];
    // insert stored item into position `to`
    this.htmlFormData.splice(to, 0, f);
  }

  removeItem(index) {
    this.htmlFormData.splice(index, 1);
  }

  public selectedTittle;


  public formId: any;
  showFormSelected(template, item) {
    this.formId = item.formId;
    this.selectedTittle = item.formTittle;
    // this.modalRef = this.modalService.show(template);
  }

  setWidth(item, modficationType) {

    // let currentClassName=item.className;
    // console.log(currentClassName.split("col-md-"));

    let columnval = Number(item.className.split("col-md-")[1]);

    if (modficationType == "plus" && columnval < 12) {
      item.className = "col-md-" + (columnval + 1);
    }
    else if (modficationType == "minus" && columnval > 1) {
      item.className = "col-md-" + (columnval - 1);
    }
    // console.log(item);


  }

}
