import { LightningElement } from 'lwc';
import  Appointment__Object from '@salesforce/schema/Appointment__c';
import PNAME_FIELD from '@salesforce/schema/Appointment__c.P_Name__c';
import PPhone_FIELD from '@salesforce/schema/Appointment__c.P_Phone__c';
import PEMAIL_FIELD from '@salesforce/schema/Appointment__c.P_Email__c';
import Gender_FIELD from '@salesforce/schema/Appointment__c.Gendeer__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';


export default class CreateAppLWC_UI extends NavigationMixin(LightningElement) {
    Pname='';
    PPhone='';
    PEmail='';
    Pgender='';
    appointmentID='';

    handleChange(event)
    {
        console.log('tetii');
        //console.log(event);
        //debugger;

        if(event.target.name==='PName')
        {
           this.Pname=event.target.value;
     
        }
       
        if(event.target.name==='PPhone')
        {
            this.PPhone=event.target.value;
            
        }
        if(event.target.name==='PEmail')
        {
            this.PEmail=event.target.value;
           
        }
        if(event.target.name==='Gender')
        {
            this.Pgender=event.target.value;
          
        }

    }

    handlePName1Change(event)
    {
        if(event.target.name==='PName')
        {
           this.Pname=event.target.value;
     
        }

    }

    handlePPhone1Change(event)
    {
        if(event.target.name==='PPhone1')
        {
           this.PPhone=event.target.value;
     
        }

    }

    handlePEmail1Change(event)
    {
        if(event.target.name==='PName')
        {
           this.Pname=event.target.value;
     
        }

    }

   

    handlePgender1Change(event)
    {
        if(event.target.name==='Pgender1')
        {
           this.Pname=event.target.value;
     
        }

    }

   

    createAppointment()
    {
        debugger;
        const fields ={};
        fields[PNAME_FIELD.fieldApiName]=this.Pname;
        fields[PPhone_FIELD.fieldApiName]=this.PPhone;
        fields[PEMAIL_FIELD.fieldApiName]=this.PEmail;
        fields[Gender_FIELD.fieldApiName]=this.Pgender;

        //console.log('Fields Naushad Value:'+this.Pname+' '+this.PPhone+' '+this.Pgender);
        console.log('Fields Value:'+fields);
        const recordInput ={ apiName:Appointment__Object.objectApiName,fields};

        createRecord(recordInput)
            .then(appointment=>
                {
                this.appointmentID=appointment.id;
                console.log('naushad Ali'+appointment.id);
                this.dispatchEvent(
                    new ShowToastEvent({
                        tille: 'Success',
                        message:'Appointment Created'+appointment.Name,
                        variant: 'success',
                    }),
                );

                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: appointment.id,
                        objectApiName: 'Appointment__c',
                        actionName: 'view'
                    },
                });
            })
            .catch( error=>
                {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title:'Error Occured in Appointment Creation',
                            message:error.body.message,
                            vairant:'error',
    
                        }),
                    );
    
                }
            );
        

    }
}