import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
export default class AccountRecordList extends LightningElement {

    @wire(getAccounts) accounts;
    accountIdfrmParent;

    handleClick(event)
    {
        event.preventDefault();
        this.accountIdfrmParent=event.target.dataset.accountid;
    }

}