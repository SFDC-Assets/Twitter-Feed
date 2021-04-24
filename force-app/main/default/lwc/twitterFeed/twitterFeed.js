import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import TwitterIcon from '@salesforce/resourceUrl/TwitterIcon';
import getCommunityUrl from '@salesforce/apex/TwitterFeed.getCommunityURL';
import getTwitterScreenName from '@salesforce/apex/TwitterFeed.getTwitterScreenName';

export default class TwitterFeed extends LightningElement {
	@api cardTitle = 'Twitter Feed';
	@api screenName = 'salesforce';
	@api height = 500;
	@api theme = 'light';
	@api recordId;
	@api objectApiName;
	@api fieldApiName;
	@api hideComponentOnError = false;

	hideComponent = false;

	twitterVfUrl;
	twitterLogoUrl = TwitterIcon + '#logo';

	renderedCallback() {
		// See if we are on a record page ...
		if (this.recordId !== undefined && this.recordId !== null) {
			getTwitterScreenName({
				recordId: this.recordId,
				objectApiName: this.objectApiName,
				fieldApiName: this.fieldApiName
			}).then((twitterHandle) => {
				if (twitterHandle === null) {
					if (this.hideComponentOnError) {
						this.hideComponent = true;
					} else {
						this.dispatchEvent(
							new ShowToastEvent({
								title: 'Twitter Feed',
								message: `No field named ${this.fieldApiName} exists on this object. Be sure to use the API name of the field containing the Twitter screen name.`,
								variant: 'error',
								mode: 'dismissable'
							})
						);
					}
				} else {
					getCommunityUrl().then((baseUrl) => {
						// We could be on a record page in a community. If not in a community, then getCommunityUrl() will just return "".
						this.twitterVfUrl = `${baseUrl}/apex/TwitterFeed?screenname=${twitterHandle}?theme=${this.theme}`;
					});
				}
			});
		} else {
			// Not on a record page. If not in a community, then getCommunityUrl() will just return "".
			getCommunityUrl().then((baseUrl) => {
				this.twitterVfUrl = `${baseUrl}/apex/TwitterFeed?screenname=${this.screenName}?theme=${this.theme}`;
			});
		}
	}
}
