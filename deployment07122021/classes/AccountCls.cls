public with sharing class AccountCls {

    public Account accObj{get;set;}
    public AccountCls() {

        accObj=new Account();


    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [select Id,name,Type,Industry,AnnualRevenue 
        from Account where Industry!=null and AnnualRevenue!=null];
    
    }
}
