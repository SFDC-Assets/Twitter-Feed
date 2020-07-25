public without sharing class GetCommunityURL {

    @AuraEnabled(cacheable=true)
    public static String getCommunityURL () {
        return Site.getBaseUrl();
    }
}