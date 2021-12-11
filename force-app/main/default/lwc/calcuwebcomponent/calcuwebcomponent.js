import { LightningElement,track } from 'lwc';

export default class Calcuwebcomponent extends LightningElement {

    firstnumber=0;
    SecondNumber=0;
    @track result=0;

    handleOnChange(event)
    {
        if(event.target.name==='fnumber')
        {
            this.firstnumber=event.target.value;
        }
        if(event.target.name==='SNumber')
        {
            this.SecondNumber=event.target.value;
        }
        this.result= parseInt(this.firstnumber)+parseInt(this.SecondNumber);
    
    }
}