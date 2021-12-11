import { LightningElement,track,api } from 'lwc';

import getSumResult from '@salesforce/apex/CalcuateNumber.getSumResult';
export default class CalculateNumber extends LightningElement {

    @track fnumber=0;
    @track snumber=0;
    @track sum=0;
    @track errors;
    @api title;
    @api greetings;

    handleOnClick()
    {
        getSumResult({Fnumber:this.fnumber,SNumber:this.snumber})
        .then(result=>{
            this.sum=result;
        })
        .catch(error=>{this.errors=error;
        });

    }
    
    handleOnChange(event)
    {
        if(event.target.name ==='fstNumber')
        {
            this.fnumber =event.target.value;
        }
        if(event.target.name ==='SecNumber')
        {
            this.snumber =event.target.value;
        }
    }

}