import { LightningElement,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import {createMessageContext,releaseMessageContext,publish} from  'lightning/messageService';
import SAMPLEMC  from '@salesorce/messageChannel/SampleMessageChannel__c';

export default class PublishLWCComponent extends LightningElement {
    context =createMessageContext();
    @track accountList;
    connectedCallback()
    {
        getAccounts()
        .then(result=> {
            this.accountList=result;
        })
        .catch(error=>
        {
            this.accountList=error;

        });

    }
    handleClick(event)
    {
        event.preventDefault();
        const message={
            recordId:event.target.dataset.vaule,
            recordData: {value: "Message  from Lightning Web Component"}


        };

        publish(this.context,SAMPLEMC,message);

    }
}