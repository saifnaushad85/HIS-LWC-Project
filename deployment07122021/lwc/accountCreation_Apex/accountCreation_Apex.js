import { LightningElement, track } from 'lwc';
import createAccoount from '@salesforce/apex/AccountCreationController.createAccount';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountCreation_Apex extends LightningElement {
    @track accountID;
    @track error;
    @track accountRecord={
        Name: ACCOUNT_NAME,
        Type: ACCOUNT_TYPE,
        Phone: ACCOUNT_PHONE
    };

    handleNameChange(event)
    {
        this.accountRecord.Name = event.target.value;
    }

    handleTypeChange(event)
    {
        this.accountRecord.Type = event.target.value;
    }

    handlePhoneChange(event)
    {
        this.accountRecord.Phone = event.target.value;
    }

    handleSaveAccount()
    {
        createAccoount({accountRecObj:this.accountRecord})
        .then(result=>{
            this.accountRecord={};
            this.accountID=result.Id;
            const evt = new ShowToastEvent({
                title:'Success',
                message:'Created Succesfully',
                variant:'success'
            });
            this.dispatchEvent(evt);


        })
        .catch(error=>{
            this.error=error.message;
        });
    }



}