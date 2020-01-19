import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'lib-formelementsetup',
  templateUrl: './formelementsetup.component.html',
  styleUrls: ['./formelementsetup.component.css']
})
export class FormelementsetupComponent implements OnInit {

  @Input() Fieldtype: any;
  @Output() change: EventEmitter<any> = new EventEmitter();

  public elementform = new FormGroup({});
  isOption: boolean = false;


  constructor(private _fb: FormBuilder) { }


  ngOnChanges() {
   // console.log(this.Fieldtype);
    this.elementform = new FormGroup({
      fieldName: new FormControl('',Validators.required),
      fieldtype: new FormControl(this.Fieldtype),
      isMandatory:new FormControl(),
      placeHolder:new FormControl(" ")
     
    });

    if (this.Fieldtype == "text" || this.Fieldtype == "textarea" ) {
      this.isOption = false;
    }
    else if (this.Fieldtype == "dropdown" || this.Fieldtype == "radio" || this.Fieldtype == "checkbox") {
      this.isOption = true;
     // this.elementform.addControl('options', new FormControl(""))
    // this.elementform.addControl('options',this._fb.array([this.optionsGroup()]));
    this.elementform = new FormGroup({
      fieldName: new FormControl('',Validators.required),
      fieldtype: new FormControl(this.Fieldtype),
      isMandatory:new FormControl(),
      options:this._fb.array([ this.optionsGroup() ])
      
    });
    }


  }

optionsGroup(){
   return this._fb.group({
    label: [''],
    key: ['']
});
}

addOptions() {
  const control = <FormArray>this.elementform.controls['options'];
  control.push(this.optionsGroup());
}

removeOptions(i: number) {
  // remove address from the list
  const control = <FormArray>this.elementform.controls['options'];
  control.removeAt(i);
}



  ngOnInit() {
  }

  saveFormValue(value) {
    
    console.log(value);
    // if (this.Fieldtype == "dropdown" || this.Fieldtype == "radio" || this.Fieldtype == "checkbox") {
    //   let arrayOption = value.options.split(",")
    //   let newOptionValues: any[] = [];
    //   for (let i = 0; i < arrayOption.length; i++) {
    //     newOptionValues.push({ key: arrayOption[i], label: arrayOption[i] })
    //   }

    //   value.options = newOptionValues;
    // }


    this.change.emit({ values: value });

  }

  cancel(){
    this.change.emit("cancel");
  }



  

}
