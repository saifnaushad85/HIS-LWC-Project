import { LightningElement, api,wire } from 'lwc';
import findContactByAccountId from '@salesforce/apex/contactController.findContactByAccountId';


export default class CreateContactRecordList extends LightningElement {
columns= [
    { label:'First Name',fieldName:'FirstName'},
    { label:'Last Name',fieldName:'LastName'},
    { label:'Email',fieldName:'Email'},
    

];

@api accountId;
@wire(findContactByAccountId,{accountId:'$accountId'}) contacts;
}