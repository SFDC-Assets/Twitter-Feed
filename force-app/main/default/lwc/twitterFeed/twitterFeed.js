import { LightningElement, api, wire, track } from "lwc";
import getCommunityUrl from "@salesforce/apex/GetCommunityURL.getCommunityURL";

export default class TwitterFeed extends LightningElement {
	@api cardTitle = "Twitter Feed";
	@api screenName = "salesforce";
	@api height = 500;
	@api theme = "light";
	@track twitterVfUrl = "";

	renderedCallback() {
		getCommunityUrl().then((result) => {
			console.log(`getCommunityUrl: ${JSON.stringify(result)}`);
			let communityUrl = result ? result : "";
			this.twitterVfUrl = `${communityUrl}/apex/TwitterFeed?screenname=${this.screenName}?theme=${this.theme}`;
		});
	}
}
