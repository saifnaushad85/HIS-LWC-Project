import { LightningElement,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccountlist';
export default class DispalydataImpretivewithApexmethod extends LightningElement {
    @track accontRecords;
    @track error;
    @track columns=[{label:'Name',fieldName:'Name',type:'text'},
    {label:'Phone',fieldName:'Phone',type:'text'},
    {label:'Industry',fieldName:'Industry',type:'text'}];

    connectedCallback()
    {
        getAccounts()
        .then(result=>{
            this.accontRecords= result;
        })
        .catch(error=>{
            this.accontRecords = undefined;
        })
        
    }

}