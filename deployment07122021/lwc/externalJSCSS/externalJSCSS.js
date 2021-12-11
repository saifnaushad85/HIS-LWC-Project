import { LightningElement } from 'lwc';
import { ShowToastEvent }  from 'lightning/platformShowToastEvent';
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';   
import jqueryMinJs from '@salesforce/resourceUrl/jqueryJSminVs1';
import demoCSS from '@salesforce/resourceUrl/demoCSSV1';


export default class ExternalJSCSS extends LightningElement {
    renderedCallback()
    {
            Promise.all([
                loadScript(this,jqueryMinJs),
                loadStyle(this,demoCSS)

            ]).then(()=>{
                $(this.template.querySelector('div')).text('Jquery Loaded');
            })
            .catch(error=>{
                this.dispatchEvent(
                      new ShowToastEvent({
                        title:'Error Loading Jqeury',
                        message:error,
                        variant: 'error'
                    })
                );
            });
    }

    handleClick(event)
    {
        let targetName=event.target.Name;
        if(event.target.Name =='togglebtn')
        {
            $(this.template.querySelector('div.mydiv')).toggle();
        }

        if(event.target.Name =='slidetogglebtn')
        {
            $(this.template.querySelector('div.mydiv')).slideToggle("slow");
        }

        if(event.target.Name =='rcorners1')
        {
            $(this.template.querySelector('div')).addClass('rcorners1');
            $(this.template.querySelector('div')).removeClass('rcorners2');
            $(this.template.querySelector('div')).removeClass('rcorners3');
        }

        if(event.target.Name=='rcorners2')
        {
            $(this.template.querySelector('div.mydiv')).addClass('rcorners2');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners1');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners3');
        }

        if(event.target.Name=='rcorners3')
        {
            $(this.template.querySelector('div.mydiv')).addClass('rcorners3');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners1');
            $(this.template.querySelector('div.mydiv')).removeClass('rcorners2');
        }



    }

}