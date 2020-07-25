import { LightningElement, api } from "lwc";
import getCommunityUrl from "@salesforce/apex/GetCommunityURL.getCommunityURL";
import getTwitterScreenName from "@salesforce/apex/GetCommunityURL.getTwitterScreenName";

export default class TwitterFeed extends LightningElement {
	@api cardTitle = "Twitter Feed";
	@api screenName = "salesforce";
	@api height = 500;
	@api theme = "light";
	@api recordId;
	@api objectApiName;
	@api fieldApiName;
	twitterVfUrl = "";

	renderedCallback() {
		if (this.recordId != undefined) {
			console.log(`Record ID: ${this.recordId}`);
			console.log(`Object API: ${this.objectApiName}`);
			console.log(`Field API: ${this.fieldApiName}`);
			getTwitterScreenName({
				recordId: this.recordId,
				objectApiName: this.objectApiName,
				fieldApiName: this.fieldApiName
			}).then((result) => {
				if (result === null) {
					this.screenName = "salesforce";
				} else {
					this.screenName = result;
				}
				getCommunityUrl().then((result) => {
					this.twitterVfUrl = `${result}/apex/TwitterFeed?screenname=${this.screenName}?theme=${this.theme}`;
				});
			});
		} else {
			getCommunityUrl().then((result) => {
				this.twitterVfUrl = `${result}/apex/TwitterFeed?screenname=${this.screenName}?theme=${this.theme}`;
			});
		}
	}
}
