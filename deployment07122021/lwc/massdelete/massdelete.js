import { LightningElement,wire,track } from 'lwc';
import getContactList from '@salesforce/apex/MassDeleteContactss.getContactList';
import deleteContactList from  '@salesforce/apex/MassDeleteContactss.deleteselectedContacts';
import { refreshApex }  from '@salesforce/apex';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';



export default class Massdelete extends LightningElement {

    @wire(getContactList) contacts;
    @track selectedContactList=[];
    @track message;
    @track error;

    @track columns=[
        { label:'First Name',fieldName:'FirstName',type:'text'},
        { label:'Last Name', fieldName:'LastName', type:'text'}
    ];

    deleteSelRecords()
    {
        deleteContactList({selContactList:this.selectedContactList})
        .then(result=>{
            this.dispatchEvent(new ShowToastEvent({
                title:'Success',
                message:'selected Rows delete',
                variant:'success',
            }),
            );
            this.template.querySelector('lightning-datatable').selectedRows =[];
            return refreshApex(this.contacts);
        })
        .catch(error=>{
            //this.message= undefined;
            this.error=error;
            this.dispatchEvent(new ShowToastEvent({
                title:'Error while Deleteing ',
                message:error.body.pageError[0].message,
                variant:'success',
            }),
            );
            console.log("error",JSON.stringify(this.error));
        })

    }

    prepareSelectedRows(event)
    {
        const selectedRows=event.detail.selectedRows;
        this.selectedContactList=[];
        for(let i=0;i<selectedRows.length;i++)
        {
            this.selectedContactList.push(selectedRows[i].Id);
        }

        console.log(this.selectedContactList);

    }

}