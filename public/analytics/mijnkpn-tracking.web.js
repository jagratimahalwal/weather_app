//import * as appM from '/AppMeasurement.web.js';

//var reportSuiteId = "kpngroupdev";

//appM.reportSuiteConfiguration(reportSuiteId) ;


/**
 * @param dataLayer
 * 
 * tracks the pageView fetches the data layer and creates measurements and sends
 * image request
 * 
 */
function trackPageView(dataLayer) {
	
	console.log('Page view DL:' + JSON.stringify(dataLayer));

	var contextDataMap = getContextDataMap(dataLayer);
	
	constructPageTracking(contextDataMap);
	
}

/**
 * @param dataLayer
 * 
 * tracks the pageView fetches the data layer and constructs the beacon and
 * sends it
 * 
 */
function trackAction(dataLayer) {

}

/**
 * tracks the Error pageView fetches the data layer and creates measurements and
 * sends image request
 */
function trackPageError(dataLayer) {

}

/**
 * @param {string} input
 * @returns {string} normalisedText
 */
function normalizeInput(input) {
	return input ? input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
			: 'no value';
}

//DAO functions

/**
 * constructs the pageName
 * @returns {string} 
 */
function getPageName(pageInfoObj) {
	return pageInfoObj;
}

/**
 * @returns siteType
 */
function getSiteType() {
	return "mijnkpn";
}

/**
 * @returns shopType if exists in the datalayer, else 'no value'
 */
function getShopType() {
	return "no value";
}

/**
 * @returns referrer through the dynamic variable
 */
function getReferrer() {
	return "D=r";
}

/**
 * @returns previous page name through app measurement plugin
 */
function getPreviousPageName() {
	if(s.pageName)
		return s.getPreviousValue(s.pageName, 'gpv_pn', '');
	else
		return "no value";
}

/**
 * @returns Url through dynamic variable
 */
function getUrl(urlObj) {
	return "D=g";
}

/**
 * @param {string}
 *            pagename
 * @returns {string} subRootName
 * 
 * eg:
 * "kpn:web:cm:mijnkpn:overzicht:verbruik:buiten-eu".replace(/([^\:]*\:){4}/,
 * '') results in "overzicht:verbruik:buiten-eu"
 * 
 */
function getSubRootName(pagename) {
	return pagename.replace(/([^\:]*\:){4}/, '');
}

/**
 * constructs the pageName
 * @returns {string} 
 */
function getPageType(pageTypeObj) {
	return pageTypeObj;
}

/**
 * constructs the pageName
 * @returns {string} 
 */
function getPageVersion(pageInstanceObj) {
	return pageInstanceObj;
}

/**
 * constructs the analytics identifier (KPN ID)
 * 
 * @param {string}
 *            profileInfoObj
 * @returns {string} KPN ID
 * 
 */
function getKPNIDHash(profileInfoObj) {
	if (profileInfoObj.type && profileInfoObj.type == "KPNIDHash")
		return profileInfoObj.profileID;
	else {
		return "no value";
	}
}

/**
 * sets the page view event For normal page view: event1
 * 
 * @returns {string} page view custom event based on the tracking type
 */
function getPageViewEvent(trackingType) {
	var ev = '';
	switch (trackingType) {
	case "pageView":
		ev = "event1";
		break;
	default:
		break;
	}
	return ev;
}

/**
 * constructs the tracking call and sends image request
**/
function constructPageTracking(contextDataMap) {
	// Tracking measurement call 
	if(window.s && contextDataMap){
		
		var trackingType = "pageView";
		
		// construct page persistent variables
		/* time stamp */
		s.timestamp = Math.round((new Date()).getTime()/1000);
		
		/* Page:Name */
		s.eVar1 = s.prop1 = s.pageName = contextDataMap.pagename;

		/* Page: Site Type */
		s.eVar2 = s.prop2 = contextDataMap.sitetype;

		/* Page: Shop Level */
		s.eVar3 = s.prop3 = contextDataMap.shoptype;

		/* Page: Referrer */
		s.eVar4 = contextDataMap.referrer;

		/* Page: Previous Pagename */
		//s.prop4 = contextDataMap.previouspagename;
		if(s.pageName)
			s.prop4 = s.getPreviousValue(s.pageName, 'gpv_pn', '')

		/* Page: Url */
		s.eVar5 = s.prop5 = contextDataMap.url;

		/* Page: Sub Root Name */
		s.eVar6 = s.prop6 = contextDataMap.pagename;

		/* Page: Type */
		s.eVar7 = s.prop7 = (contextDataMap.primarycategory);

		/* Page: Version or PageInstaneId */
		s.eVar10 = s.prop10 = contextDataMap.version;

		/* Page view Event */
		s.events = trackingType;

		/* Page view tracking call */
		s.t();
		
	}
}

/**
 * sets the context data map name and value
 */
function getContextDataMap(dataLayer) {

	if(dataLayer){
		return {
			"pagename" : (dataLayer.page && dataLayer.page.pageInfo) ? getPageName(dataLayer.page.pageInfo.pageName) : "no value",
			"sitetype" : getSiteType(),
			"shoptype" : getShopType(),
			"referrer" : getReferrer(),
			//"previouspagename" : getPreviousPageName(),
			"url" : (dataLayer.page && dataLayer.page.pageInfo) ? getUrl(dataLayer.page.pageInfo.destinationURL) : "D=g",
			"subrootname" : (dataLayer.page && dataLayer.page.pageInfo) ? getSubRootName(dataLayer.page.pageInfo.pageName) : "no value",
			"pagetype"    : (dataLayer.page && dataLayer.page.category) ? getPageType(dataLayer.page.category.primaryCategory) : "no value",
			"version" : (dataLayer.page && dataLayer.page.pageInfo) ? getPageVersion(dataLayer.page.pageInfo.version) : "no value",
			// "kpnidhash" : (dataLayer.user && dataLayer.user[0] &&
			// dataLayer.user[0].profile && dataLayer.user.profile[0] &&
			// dataLayer.user.profile[0].profileInfo) ?
			// getKPNIDHash(dataLayer.user.profile.profileInfo) : ''
		};
	}
	else
		return "";
}
