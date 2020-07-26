![Creative Commons License](https://img.shields.io/badge/license-Creative%20Commons-success) ![In Development](https://img.shields.io/badge/status-Released-success) ![Code Coverage](https://img.shields.io/badge/code%20coverage-100%25-success)


<h1 align="center">TWITTER FEED</h1>
<p align="center">
This package contains a Lightning component, VisualForce page, and other support to embed a Twitter feed in a Salesforce Lightning record page.
</p>

## Summary

 This component can be used in a home page, an app page, a record page, or a community page and is smart enough to recognize which type of page it is in. In most of these pages, you will need to supply a Twitter screen name, or "handle", to the component to tell it which Twitter feed to display.
 
 ![Twitter Feed](/images/TwitterFeed.png)

 In the case of a record page, the component will require the API name of a field in the record that contains the Twitter screen name. This can be useful, for example, in a Contact or Account record to display the feed for that person or account.

 You can also manage the height of the component, the title of the Lightning card, and the theme ("light" or "dark").

## Installation and Setup

Installation is easy: just read the disclaimer below and click on the **Install the Package** link to install the components of the unlocked package. Simply create a Lightning app, home, or record page using Lightning App Builder and drag the component onto the page where you would like it. From there, you will need to configure the screen name, title, height of the component on the page, and theme.

![App Builder](/images/TwitterFeedAppBuilder.png)

To allow access to the feed component, you will need to assign the permission set `Twitter Feed` to anyone who will be using it. The permission set grants access to the `TwitterFeed` Visualforce page and the `TwitterFeed` Apex class.

**IMPORTANT**: This component recognizes when it is being used in a community page. If you intend to use this component in an unauthenticated community, you will need to grant these accesses manually:
- From Setup, go to "All Communities" and click on your community.
- Bring up the Builder tab and click on Settings -> General and select the "Public Access" checkbox.
- Bring up the Administration tab and click on the "Pages" tab.
- Click on the "Go to force.com" link.
- Click on the "Public Access Settings" button.
- Add the `TwitterFeed` Visualforce page and the `TwitterFeed` Apex class.

## How to Deploy This Package to Your Org

I am a pre-sales Solutions Engineer for [Salesforce](https://www.salesforce.com) and I develop solutions for my customers to demonstrate the capabilities of the amazing Salesforce platform. *This package represents functionality that I have used for demonstration purposes  and the content herein is definitely not ready for actual production use; specifically, it has not been tested extensively nor has it been written with security and access controls in mind. By installing this package, you assume all risk for any consequences and agree not to hold me or my company liable.*  If you are OK with that ...

[Install the Package](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2E000003obvFQAQ)

## Maintainer

[John Meyer / johnsfdemo](https://github.com/johnsfdemo)
