import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountSearchController.getAccounts';
import StayInTouchSignature from '@salesforce/schema/User.StayInTouchSignature';


export default class CustomLookUpComp extends LightningElement {

    @track accountName;
    @track accountList;
    @track ObjectApiName= 'Account';
    @track accountId;
    @track isShow=false;
    @track messageResult=false;
    @track isShowResult=true;
    @track showSearchValue=false;
    @wire(getAccounts,{actName:'$accountName'})
    retrieveAccounts({error,data})
    {
            if(data)
            {
                console.log('Data:'+data.length);
                if(data.length>0 && this.isShowResult)
                {
                    this.accountList=data;
                    this.showSearchValue=true;
                    this.messageResult=false;

                }
                else if(data.length==0)
                {
                    this.accountList=[];
                    this.showSearchValue=false;
                    if(this.accountName!='')
                    {
                        this.messageResult=true;
                    }


                }
            }

            else if(error)
            {
                this.accountId= '';
                this.accountName= '';
                this.accountList =[];
                this.showSearchValue=false;
                this.messageResult=true;
            }
    }

    handleClick(event)
    {
        this.isShowResult=true;
        this.messageResult=false;
    }

    handleKeyChange(event)
    {
        this.messageResult=false;
        this.accountName=event.target.value;
    }

    handleParentSelection(event)
    {
        this.showSearchValue=false;
        this.isShowResult=false;
        this.messageResult=false;
        this.accountId=event.target.dataset.value;
        this.accountName=event.target.dataset.label;
        console.log('accountId'+    this.accountId);
        const selectedEvent= new CustomEvent('selected',{detail:this.accountId});
        this.dispatchEvent(selectedEvent);
    }

    handleOpenModal(event)
    {
        this.isShow=true;
        console.log('Good');
    }

    handleClosedModal(event)
    {
        this.isShow=false;
    }
    handleSuccess(event)
    {
        this.isShowResult=false;
        this.messageResult=false;
        this.isShow=false;
        this.accountId = event.detail.id;
        console.log('acccount Id' +event.detail.id);
        this.accountName=event.detail.fields.Name.value;
        const selectedEvent =new  CustomEvent('selected', {detail: this.accountId});
        this.dispatchEvent(selectedEvent);


    }

    handleReset(event)
    {
        const inputfields =this.template.querySelectorAll('lightning-input-field');
        if(inputfields)
        {
            inputfields.array.forEach(field =>  { field.reset()
                
            });
        }
        this.isShow=false;
    }


}