import { LightningElement,track } from 'lwc';
import { subscribe,unsubscribe,onError,setDebugFlag,isEmpEnabled } from  'lightning/empApi';

export default class PlatFormEvent extends LightningElement {
    channelName='/event/Record_Creation__e';
    isSubscribeDisabled =false;
    isUnSubcribeDiabled=false;
    subscription=[];
    @track accountList=[];

    connectedCallback()
    {

    }

    handleSubscribe()
    {
        subscribe(this.channelName,-1,this.messageCallback).then(response =>{
            console.log('Subscription resquest sent to :',JSON.stringify(response.channelName));
            this.subscription=response;
        });

    }

    handleUnsubscribe()
    {
        unsubscribe(this.subscription,response =>{
            console.log('unsubscribe() response:',JSON.stringify(response));
        });
    }

    disconnectedCallback()
    {
        this.handleUnsubscribe();
    }
    
    messageCallback=(response) =>{
        let actName =response.data.paylaod.Record_Name__c;
        let actId= response.data.paylaod.Record_ID__c;
        let recPath='/'+response.data.paylaod.Record_ID__c;
        this.accountList.push("Id:"+actId,"Name:"+actName,"Path"+recPath);
        console.log('this.accountlist::'+JSON.stringify(this.accountList));
    }


}