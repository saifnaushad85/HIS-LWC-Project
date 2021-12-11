import { LightningElement,api } from 'lwc';
import {FlowNavigationNextEvent,FlowNavigationFinishEvent} from 'lightning/flowSupport';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordCreateForm extends LightningElement {
    @api availableActions=[];
    @api objectApiName;
    @api title;
    @api parentRecordId;
    @api recordIdAfterSave;
    @api message;
    @api fields;
    @api parentFieldApiName;
    fieldList;
    connectedCallback()
    {
        if(this.fields)
        {
            this.fieldList=this.fields.split(",");

        }
    }

    handleSuccess(event)
    {
        const eve= new ShowToastEvent({
            title: 'Record Save',
            message: this.message+'with  record id '+event.detail.id,
            variant :'success'
        });
        this.dispatchEvent(eve);
        this.recordIdAfterSave= event.detail.id;
        this.handleGoNext();
    }

    handleGoNext()
    {
        if(this.recordIdAfterSave && this.recordIdAfterSave.startsWith('006'))
        {
            const finishEvent= new FlowNavigationFinishEvent();
            this.dispatchEvent(finishEvent);

        }
        if(this.availableActions.find(action => action === 'NEXT'))
        {
            const navigationNextEvent= new  FlowNavigationNextEvent();
            this.dispatchEvent(navigationNextEvent);
        }

    }

    handleSubmit(event)
    {
        event.preventDefault();
        const fields=event.detail.fields;
        fields[this.parentFieldApiName]=this.parentRecordId;
        this.template.querySelector('lightning-record-form').submit(fields);
    }

}