public with sharing class AccountSearchCls {
    public AccountSearchCls() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String actName)
    {
        string keyString = '%'+actName+'%';
        return [select id,name from Account where name like:keyString];
    }
   

}
