import { LightningElement,api } from 'lwc';

export default class ShowContactFromFlow extends LightningElement {
 @api records=[];
 @api fieldColumns=[
     {label:'First Name', fieldName:'FistName' },
     {label:'Last Name', fieldName:'LastName' },
     {label:'Email', fieldName:'Email' }
]
}