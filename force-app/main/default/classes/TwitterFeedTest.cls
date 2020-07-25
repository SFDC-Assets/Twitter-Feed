@isTest
private without sharing class TwitterFeedTest {
 
    @isTest
    static void runTests () {
        Test.startTest();
        Account acc = new Account(Name = 'Good', AccountNumber = 'salesforce');
        insert acc;
        Id accId = acc.Id;
        String url = TwitterFeed.getCommunityURL();
        String goodName = TwitterFeed.getTwitterScreenName(accId, 'Account', 'AccountNumber');
        String badName = TwitterFeed.getTwitterScreenName(accId, 'Account', 'John__c');
        System.assertEquals(goodName, 'salesforce');
        System.assertEquals(badName, null);
        Test.stopTest();
    }
}
