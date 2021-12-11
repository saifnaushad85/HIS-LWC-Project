public with sharing class AccountSearchController {
    public AccountSearchController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String actName)
    {
        List<Account> accountList= new List<Account>();
        if(actName!='')
        {
        string keyString = '%'+actName+'%';
        
        accountList= [select id,name from Account where name like:keyString];
        return accountList;
        }
        return accountList;
    }
}
