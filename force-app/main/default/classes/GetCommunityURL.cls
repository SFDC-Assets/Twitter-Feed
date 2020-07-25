public without sharing class GetCommunityURL {

    @AuraEnabled(cacheable=true)
    public static String getCommunityURL () {
        return Site.getBaseUrl();
    }

    @AuraEnabled(cacheable=true)
    public static String getTwitterScreenName (Id recordId, String objectApiName, String fieldApiName) {
        try {
            List<sObject> result = Database.query('SELECT ' + fieldApiName + ' FROM ' + objectApiName + ' WHERE Id = \'' + recordId + '\'');
            return (String) result[0].get(fieldApiName);
        } catch (Exception e) {
            return null;
        }
    }
}