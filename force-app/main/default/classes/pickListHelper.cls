public with sharing class pickListHelper {
    public pickListHelper() {

    }
    @AuraEnabled(cacheable=true )
    public static Map<String,String> getprofiles()
    {
        Map<String,String> profileMap= new Map<String,String>();
        for(Profile profileObj:[select id,name from profile limit 10])
        {
            profileMap.put(profileObj.Id,profileObj.Name);
           

        }
        return profileMap;
    }
}
