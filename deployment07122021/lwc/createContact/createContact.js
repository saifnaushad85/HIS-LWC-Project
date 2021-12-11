import { LightningElement, track } from 'lwc';
import {createRecord, creeateRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
import CONTACT_OBJECT  from '@salesforce/schema/Contact';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import PhONE_FIELD from '@salesforce/schema/Contact.Phone';
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId'; 
import AccountId from '@salesforce/schema/Case.AccountId';

export default class CreateContact extends  NavigationMixin(LightningElement) {
    @track selectedAccountId;
    @track contactId;
    @track selectedIndustry;
    name='';
    phone='';


    handlechange(event)
    {
        //console.log(event.target.label);
        //c/listconsole.log(event.target.value);
        if(event.target.label=='LastName')
        {
            this.name=event.target.value;
        }
        if(event.target.label=='Phone')
        {
            this.phone =event.target.value;
        }

    }

    createContact()
    {
        console.log(this.selectedAccountId);
        const fields={};
        fields[LAST_NAME_FIELD.fieldApiName] =this.name;
        fields[PhONE_FIELD.fieldApiName]=this.phone;
        fields[ACCOUNTID_FIELD.fieldApiName]=this.selectedAccountId;
        const recordInput= {apiName: CONTACT_OBJECT.objectApiName,fields };
        createRecord(recordInput)
        .then(contactobj=> {
            this.contactId=contactobj.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message:'Contact Created',
                    variant:  'Success',
                }),
            );
            this[NavigationMixin]({
                type: 'standard_recordPage',
                attributes :{
                    recordId :this.contactId,
                    objectApiName: 'Contact',
                    actionName:'View'
                },
            });
        })
        .catch(error=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating  record',
                    message: error.body.message,
                    variant:'error',
            }),
        );
        
        });

    }

    handleSelected(event)
    {
        console.log(event.detail);
        this.selectedAccountId=event.detail;
    }
}