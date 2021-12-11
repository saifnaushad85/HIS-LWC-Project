import { LightningElement, api } from 'lwc';
import Contact_Phone from '@salesforce/schema/Contact.Phone';
import Contact_Email from  '@salesforce/schema/Contact.Email';
import Contact_FirstName from '@salesforce/schema/Contact.FirstName';
import Contact_Account from '@salesforce/schema/Contact.AccountId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactquickUpdate extends LightningElement {

   @api recordId;
   @api objectApiName;
   fieldList =[Contact_Phone,Contact_Email,Contact_FirstName];
   handleContactUpdate(event)
   {
       const evt = new ShowToastEvent({
           title: 'Contact update',
           message:'record Id Updated '+event.detail.fieldList.Contact_FirstName.value +'Successfully',
           variant: 'success',
       });

       this.dispatchEvent(evt);

   }

}