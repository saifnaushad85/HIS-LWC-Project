public with sharing class contactController {
    public contactController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<contact> findContactByAccountId(String accountId){
        return [select id,FirstName,Lastname,Email,Phone
        From contact where AccountID=:accountId limit 10];
    }
}
