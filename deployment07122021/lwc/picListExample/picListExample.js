import { LightningElement,wire } from 'lwc';
import {getPicklistValues} from 'lightning/uiObjectInfoApi';
import TYPE_FIELD  from  '@salesforce/schema/Account.Type';
import LEAD_SOURCE from '@salesforce/schema/Contact.LeadSource';
import getprofiles from '@salesforce/apex/pickListHelper.getprofiles';
import { ShowToastEvent }  from 'lightning/platformShowToastEvent';

export default class PicListExample extends LightningElement {

    selectedValue;
    selectedAccountType;
    selectedLeadSource;
    selectedProfile;
    profileOptionsList;

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.selectedValue = event.target.value;
    }

    @wire(getPicklistValues,{
        recordTypeID: '0122v000002NEja',
        fieldApiName: TYPE_FIELD

    }) typeValues;

    handleAccountTypeChange(event)
    {
        this.selectedAccountType=event.target.value;
    }

    @wire(getprofiles)
    retrieveProfiles({error,data})
    {
        let tempArray = [];
        if(data)
        {
            for(let key in data)
            {
                tempArray.push({label:data[key],value:key});
            }
        
        }
        if(error)
        {
            
           
        }
        this.profileOptionsList=tempArray;



    }

    handleProfileChange(event)
    {
        this.selectedProfile=event.target.value;
    }

   
}