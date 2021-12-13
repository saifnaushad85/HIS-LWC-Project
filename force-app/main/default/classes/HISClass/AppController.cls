public with sharing class AppController {
    public AppController() {

    }
    @AuraEnabled(cacheable=true)
    public static list<Appointment__c> getAppList()
    {
        String  VarNew='Naushad Ali';
        List <Appointment__c> aplist =[select Name,P_Name__c,P_Phone__c,PaymentStatus__c,
        Appointment_Date__c from Appointment__c limit 50];
        return aplist;
    }
    
}
