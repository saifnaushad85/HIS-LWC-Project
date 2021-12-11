import { LightningElement,track } from 'lwc';

export default class Parent extends LightningElement {
@track message;
@track messageFromChild;

    sendDataToChild(event)
    {
        this.message='Message  from Parent!!!';
    }

    handleChildMessage(event)
    {
        this.messageFromChild= event.detail;

    }

}