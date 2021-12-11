import { LightningElement, track } from 'lwc';

import {createMessageContext,releaseMessageContext,APPLICATION_SCOPE,subscribe,unsubscribe,publish} from  'lightning/messageService';
import SAMPLEMC  from '@salesorce/messageChannel/SampleMessageChannel__c';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from  '@salesforce/schema/Account.AnnualRevenue';
import Industry_FIELD from  '@salesforce/schema/Account.Industry';

export default class Subscriber_LWC extends LightningElement {

    context= new createMessageContext();
    subsciption=null;
    @track receivedMessage='';
    @track accountID;
    @track ObjectApiName='Account';
    fileds=[NAME_FIELD,REVENUE_FIELD,Industry_FIELD];
    connectedCallback()
    {
        this.subscribeMC();
    }

    subscribeMC()
    {
        if(this.subsciption)
        {
            return;
        }
        this.subsciption=subscribe(this.context,SAMPLEMC,(message=>{
            this.handleMessage(message)},
            {scopoe: APPLICATION_SCOPE}));
    }

    handleMessage(message)
    {
        console.log('messsage:::'+JSON.stringify(message));
        this.accountID=message.recordId;
        this.receivedMessage=message?message.recordData.value :'No Message payLoad';
    }




}