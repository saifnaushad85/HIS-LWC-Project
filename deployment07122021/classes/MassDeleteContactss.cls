public with sharing class MassDeleteContactss {
    public MassDeleteContactss() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList()
    {
        return [select Id,firstname,Lastname, title,phone,Email from Contact where firstname!=null order by createddate desc];

    }

    @AuraEnabled
    public static Void deleteselectedContacts(List<id> selContactList)
    {
        List<Contact> contactList= new List<Contact>();
        contactList=[select id from Contact where Id in:selContactList];
        if(contactList!=null && contactList.size()>0)
        {
            delete contactList;
        }

    }
    
}
