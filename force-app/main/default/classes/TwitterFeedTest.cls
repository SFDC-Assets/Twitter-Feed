@isTest
private without sharing class TwitterFeedTest {
 
    @isTest
    static void runTests () {
        System.Test.startTest();
        Account acc1 = new Account(Name = 'John', AccountNumber = 'salesforce');
        insert acc1;
        Account acc2 = new Account(Name = 'Jane');
        insert acc2;
        String url = TwitterFeed.getCommunityURL();
        System.assertEquals(TwitterFeed.getTwitterScreenName(acc1.Id, 'Account', 'AccountNumber'), 'salesforce');
        System.assertEquals(TwitterFeed.getTwitterScreenName(acc1.Id, 'Account', 'John__c'), null);
        System.assertEquals(TwitterFeed.getTwitterScreenName(acc2.Id, 'Account', 'AccountNumber'), '');
        System.Test.stopTest();
    }
}
