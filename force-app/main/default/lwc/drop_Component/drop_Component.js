import { LightningElement,track } from 'lwc';
import NAME_Field from '@salesforce/schema/Account.Name';
import Industry from '@salesforce/schema/Account.Industry';
import Phone from '@salesforce/schema/Account.Phone';

export default class Drop_Component extends LightningElement {
    fields=[NAME_Field,Industry,Phone];
    @track accountId;
    @track message='Drop an Account here';
    dropElement(event)
    {
        this.accountId=event.datatransfer.getData("account_Id");
        this.message='';

    }

    allowDrop(event)
    {
        event.preventDefault();
    }

}