import { LightningElement,wire,track } from 'lwc';

import getAppList from '@salesforce/apex/AppController.getAppList';

export default class ApphisList extends LightningElement {
 @track data;
 @track dataCount;
 @track columns=[
      {label:'Patient Name', fieldName:'P_Name__c', type:'text'},
      {label:'Appoint No', fieldName:'Name', type:'text'},
      {label:'Phone', fieldName:'P_Phone__c', type:'Phone'},
      {label:'Appointment Date', fieldName:'Appointment_Date__c', type:'Date'}
      
 ];

 @wire(getAppList) appointmentRecords({error,data})
 {
     if(data)
     {
         this.data=data;
     
     }

     else if(error)
     {
        // this.data= undefined;
        console.log(error);
     }

 }
}