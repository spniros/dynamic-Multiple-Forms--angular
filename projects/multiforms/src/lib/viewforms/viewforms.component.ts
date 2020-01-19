import { FormDataList } from './FormDataList';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-viewforms',
  templateUrl: './viewforms.component.html',
  styleUrls: ['./viewforms.component.css']
})
export class ViewformsComponent implements OnInit {

  public formTittle: any;
  public htmlFormData: any;
  public formgroup = new FormGroup({});
  public isForm: boolean = false;
  public gridSetting: string;
  @Input() saveFormData;
  @Input() formId;
  @Input() viewFormDetails: FormDataList;

  @Output() formSave: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges() {

    this.htmlFormData = this.viewFormDetails.htmlMetaData;
    this.formTittle = this.viewFormDetails.formTittle;
    this.gridSetting = this.viewFormDetails.gridClass;

    this.formgroup.addControl('formId', new FormControl(this.formId));

    for (let i = 0; i < this.htmlFormData.length; i++) {
      this.formgroup.addControl(this.htmlFormData[i].name, new FormControl('',this.htmlFormData[i].isMandatory? Validators.required:Validators.nullValidator))
    }
//========================
// this part for already save data view for form
    // if (this.saveFormData) {
    //   this.formgroup.addControl('formId', new FormControl(this.saveFormData.formId));
    //   for (let i = 0; i < this.htmlFormData.length; i++) {
    //     let name = this.htmlFormData[i].name
    //     let abc = this.saveFormData[name];
    //     console.log(abc);
    //     this.formgroup.addControl(this.htmlFormData[i].name, new FormControl(abc, this.htmlFormData[i].isMandatory ? Validators.required : Validators.nullValidator))
    //   }

    // }
    // else {
    //   for (let i = 0; i < this.htmlFormData.length; i++) {
    //     this.formgroup.addControl(this.htmlFormData[i].name, new FormControl('', this.htmlFormData[i].isMandatory ? Validators.required : Validators.nullValidator))
    //   }

    // }
    // this part for already save data view for form
   // ======================================

    this.isForm = true;
    // let dataList:FormDataList[]=[];
    //  dataList = JSON.parse(localStorage.getItem("createdformList"));
    //  let selectedData:any;
    //  console.log(dataList);
    //  selectedData= dataList.find(x=>x.formId==this.formId)
    //     this.htmlFormData = selectedData.htmlMetaData;
    //     this.formTittle = selectedData.formTittle;

    //     for (let i = 0; i < this.htmlFormData.length; i++) {
    //       this.formgroup.addControl(this.htmlFormData[i].name, new FormControl(''))
    //     }
    //     this.isForm = true;
  }

  ngOnInit() {



    //    // let savedData = JSON.parse(localStorage.getItem("createdform"));
    //     let dataList = JSON.parse(localStorage.getItem("createdformList"));
    // let savedData=dataList.filter(x=>{x.formTittle==this.formId});
    //     this.htmlFormData = savedData.htmlMetaData;
    //     this.formTittle = savedData.formTittle;


    //     for (let i = 0; i < this.htmlFormData.length; i++) {
    //       this.formgroup.addControl(this.htmlFormData[i].name, new FormControl(''))
    //     }
    //     this.isForm = true;
  }

  saveData(value) {
    //console.log(value);
    this.formSave.emit(value);
  }




}
