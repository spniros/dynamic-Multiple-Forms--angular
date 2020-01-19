import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Multi Forms'
  createdFormDetailsList:any=[];
//  createdFormDetailsList:dataList[]=[];

  createdFormDetails(event){
    if(event){
      this.createdFormDetailsList.push(event);
  // this.listOfCreatedFormDetails.push(this.createdFormDetails);
  //    localStorage.setItem('createdformList', JSON.stringify(this.createdFormDetailsList));
    // localStorage.setItem('createdform', JSON.stringify(this.createdFormDetails));
    }

  }
  saveDetail(event){
    
// this.createdFormDetailsList.forEach(x => {

//   if(x.formId== event.formId){ x.saveFormData=event  }
// });


   
console.log(event);
// console.log(this.createdFormDetailsList);
  }
  
}

