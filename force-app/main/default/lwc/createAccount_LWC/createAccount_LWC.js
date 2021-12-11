import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';


export default class CreateAccount_LWC extends LightningElement {
    name='';
    phone='';
    handleChange(event)
    {
        console.log(event);
        if(event.target.name==='name')
        {
            this.name=event.target.value;
        }
        if(event.target.name==='phone')
        {
            this.phone=event.target.value;
        }

        
    }
    createAccount()
    {
        const fields={  Name: this.name,Phone:this.phone};
        
        const recordInput= {apiName : ACCOUNT_OBJECT.objectApiName, fields};
        window.console.log('Custom Naushad Logs'+recordInput+'kj'+this.name +':'+JSON.stringify(this.recordInput));
        createRecord(recordInput)
        .then(account=> 
            {
            this.accountId=account.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Success',
                    message: 'Account Created ID',
                    vairant:'success',

                }),
            );
            this[NavigationMixin.navigate]({
                type:'standard_recordPage',
                attributes: {
                    recordId : account.id,
                    objectApiName: 'Account',
                    actionName: 'view'
                },
            });


        })
        .catch( error=>
            {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title:'Error Occured',
                        message:error.body.message,
                        vairant:'error',

                    }),
                );

            }
        );


    }
    


}