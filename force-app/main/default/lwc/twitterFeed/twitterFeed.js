import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getCommunityUrl from "@salesforce/apex/TwitterFeed.getCommunityURL";
import getTwitterScreenName from "@salesforce/apex/TwitterFeed.getTwitterScreenName";

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
		// See if we are on a record page ...
		if (this.recordId != undefined) {
			getTwitterScreenName({
				recordId: this.recordId,
				objectApiName: this.objectApiName,
				fieldApiName: this.fieldApiName
			}).then((result) => {
				this.screenName = result === null || result === "" ? "salesforce" : result;
				getCommunityUrl().then((result) => {
					// We could be on a record page in a community. If not in a community, the getCommunityUrl() will just return "".
					this.twitterVfUrl = `${result}/apex/TwitterFeed?screenname=${this.screenName}?theme=${this.theme}`;
				});
				if (result === null)
					this.dispatchEvent(
						new ShowToastEvent({
							title: "Twitter Feed",
							message: `No field named ${this.fieldApiName} exists on this object. Be sure to use the API name of the field containing the Twitter screen name.`,
							variant: "error",
							mode: "dismissable"
						})
					);
			});
		} else {
			// Not on a record page. If not in a community, the getCommunityUrl() will just return "".
			getCommunityUrl().then((result) => {
				this.twitterVfUrl = `${result}/apex/TwitterFeed?screenname=${this.screenName}?theme=${this.theme}`;
			});
		}
	}
}
