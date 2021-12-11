import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountCls.getAccountList';
export default class Dragger_Component extends LightningElement {
    
    @wire(getAccounts) accounts;

    handleDragStart(event)
    {
        event.dataTransfer.setData("account_id",event.target.dataset.item);
    }

}