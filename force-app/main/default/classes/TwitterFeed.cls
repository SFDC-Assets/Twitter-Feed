//  Controller for the Twitter Feed Lightning component.
//  
//  This code is provided AS IS, with no warranty or guarantee of suitability for use.
//  Contact: john.meyer@salesforce.com


public without sharing class TwitterFeed {

    //  Get the experience (community) base URL. If this component is not in a community, this returns ''.
    
    @AuraEnabled(cacheable=true)
    public static String getCommunityURL () {
        return Site.getBaseUrl();
    }

    
    //  Get the Twitter handle (screen name) from the given record. If the given object API name or field API name cause the
    //  component to throw an error, return null; if the handle field is empty, return ''; otherwise, return the string in
    //  the given field of the given object.
    //
    //  The parameters represent:
    //      recordId:  the record ID of the record
    //      objectApiName:  the API name of the object containing the field
    //      fieldApiName:  the API name of thee field in the object containing the Twitter handle
    
    @AuraEnabled(cacheable=true)
    public static String getTwitterScreenName (Id recordId, String objectApiName, String fieldApiName) {
        try {
            sObject result = Database.query('SELECT ' + fieldApiName + ' FROM ' + objectApiName + ' WHERE Id = \'' + recordId + '\'');
            String screenName = (String) result.get(fieldApiName);
            if (screenName == null)
                screenName = '';
            return screenName;
        } catch (Exception e) {
            return null;
        }
    }
}