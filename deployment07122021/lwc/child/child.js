import { LightningElement,api } from 'lwc';

export default class Child extends LightningElement {
    @api textMessage;

    sendMessageToParent(event)
    {
        const sendmessagefromChid =new CustomEvent('childmessage',{detail:'Hi I am from Child'});
        this.dispatchEvent(sendmessagefromChid);
    }
}