import { LightningElement,api } from 'lwc';
import {FlowNavigationNextEvent} from 'lightning/flowSupport';
import  { ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class AccountRecordUpdateComp extends LightningElement {

    @api availableActions=[];
    @api accountRecordId;
    objectApiName='Account';
    fields =['Name','Type','Industry'];
    handleSuccess(event)
    {
        const eve = new ShowToastEvent({
            title:'Record Updte',
            message: 'Record Updated Successfully ',
            variant :'success'
        });

        this.dispatchEvent(eve);
        this.handleGoNext();
    
    }

    handleGoNext()
    {
        if(this.availableActions.find(action =>action ==='NEXT'))
        {
            const navigationEventNext= new FlowNavigationNextEvent();
            this.dispatchEvent(navigationEventNext);
        }
    }

}