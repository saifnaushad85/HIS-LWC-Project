import { LightningElement, track } from 'lwc';
import saveAccount from '@salesforce/apex/AccountCreationController.createAccounts';
import { ShowToastEvent }  from 'lightning/platformShowToastEvent';
export default class MultipleAccountCreation extends LightningElement {

    @track keyIndex=0;
    @track message=0;
    @track error=0;
    @track accountRecList= [{
        Name:'HeroMotors',
        Industry:'Engineering',
        Phone:'545454'
    }];

    changeHandler(event)
    {
        if(event.target.Name ==='accName')
        {
            this.accountRecList[event.target.accessKey].Name = event.target.value;
        }

        else if(event.target.Name ==='accIndustry')
        {
            this.accountRecList[event.target.accessKey].Industry =event.target.value;
        }

        else if(event.target.Name ==='accPhone')
        {
            this.accountRecList[event.target.accessKey].Phone =event.target.value;
        }

    }
    addRow()
    {
        this.keyIndex+1;
        this.accountRecList.push({
            Name:'',
        Industry:'',
        Phone:''
        });


    }

    removeRow(event)
    {
        if(this.accountRecList.length>=1)
        {
            this.accountRecList.splice(event.target.accesskey,1);
            this.keyIndex-1;
        }

    }
    savemultipleAccount()
    {

        console.log(JSON.stringify(this.accountRecList));

        saveAccount({ accountList: this.accountRecList })
        .then(result=>
            {
                
                console.log(result);
                this.accountList.forEach(function(item)
                {
                    item.Name='';
                    item.Industry='';
                    item.Phone='';
                });
            
                if(result !== 'undefined')
                {
                    this.dispatchEvent( new ShowToastEvent({
                        title:'Succeess',
                        message:'Account Created',
                        variant:'success'

                    }));
                }

            console.log(JSON.stringify(result));
            console.log("result",this.message);
            }) 
            .catch(error=>{
                this.message= undefined;
                this.error=error;
                this.dispatchEvent( new ShowToastEvent({
                    title:'Error while Craeted Records',
                    message:error.body.message,
                    variant:'error'

                })
                );
                console.log("error",JSON.stringify(this.error));

            });
        
    }

}