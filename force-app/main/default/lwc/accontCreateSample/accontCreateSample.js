import { LightningElement } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from  '@salesforce/schema/Account.Type';
import Account_Industry from '@salesforce/schema/Account.Industry' ;
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';


export default class AccontCreateSample extends LightningElement {
    objectApiName ='Account';
    fieldList = [Account_Name, Account_Type, Account_Industry];
    handleAccountCreate(event)
    {
        const eve = new ShowToastEvent({
            title :'Account Create',
            message : "Record ID"+ event.detail.id,
            variant : "success",

        });
        this.dispatchEvent(eve);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordid: event.detail.id, 
                objectApiName: 'Account',
                actionName: 'view'
            },
        }); 

    }
}