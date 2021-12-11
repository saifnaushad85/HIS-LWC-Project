import { LightningElement,api } from 'lwc';
import PNAME from '@salesforce/schema/Appointment__c.P_Name__c';
import PPhone from '@salesforce/schema/Appointment__c.P_Phone__c';
import PEMAIL from '@salesforce/schema/Appointment__c.P_Email__c';
import Gender from '@salesforce/schema/Appointment__c.Gendeer__c';
//import ShowToastEvent from 'lightning/platformShowToastEvent';


export default class AppFormLwc extends LightningElement {

    @api recordId;
    @api objectApiName='Appointment__c';

    fields=[PNAME,PPhone,PEMAIL,Gender];

    handleSuccess(event)
    {
        const eve= new ShowToastEvent({
            title:'Appointment Booked',
            message:'Appointment Id'+event.detail.Id,
            variant:'Success'
        });
        this.dispatchEvent(eve);

    }



}