import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class DisplayDatausingWire extends LightningElement {
    @track accdata;
    @wire(getAccounts) accountRecord({data, error})
    {
        if(data)
        {
            this.accdata = data;
        }
        else if(error)
        {
            this.accdata=undefined;
        }
       
        
    }
    
}