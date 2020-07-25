@isTest
private without sharing class TwitterFeedTest {
 
    @isTest
    static void runTests () {
        Test.startTest();
        Account acc = new Account(Name = 'John', AccountNumber = 'salesforce');
        insert acc;
        String url = TwitterFeed.getCommunityURL();
        System.assertEquals(TwitterFeed.getTwitterScreenName(acc.Id, 'Account', 'AccountNumber'), 'salesforce');
        System.assertEquals(TwitterFeed.getTwitterScreenName(acc.Id, 'Account', 'John__c'), null);
        Test.stopTest();
    }
}
