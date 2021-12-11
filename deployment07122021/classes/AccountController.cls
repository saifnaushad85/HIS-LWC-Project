public with sharing class AccountController {
    public AccountController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts()
    {
        return [select Id,name,type, industry from Account limit 10];
        
    }
    @AuraEnabled
    public static List<Account> getAccountlist(){

        return [select Id,name,type, industry from Account limit 10];
    }
}
