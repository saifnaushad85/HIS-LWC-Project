import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountSearchCls.getAccounts';
import { ShowToastEvent }  from 'lightning/platformShowToastEvent';
const DELAY=300;
export default class SearchAccount extends LightningElement {

    accountName ='';
    @track accountList=[];
    @wire(getAccounts, {actName: '$accountName'})
    retrieveAccounts({error,data})
    {
       
        if(data)
        {
            this.accountList = data;
           
        }
        else if(error)
        {
            console.log('Naushad Ali'+JSON.stringify(this.error));

        }
        
    }

    handleKeyChange(event)
    {
        
        const searchString=event.target.value;
        window.clearTimeout(this.delayTimeOut);
        this.delayTimeOut =setTimeout(()=>{
            this.accountName = searchString;
        },DELAY );

    }


    
    

}