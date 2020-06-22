/**
     * tracks the pageView
     * fetches the data layer and creates measurements and sends image request
 **/

global.reportSuiteConfiguration = function reportSuiteConfiguration(reportSuiteId) {
}

global.trackPageView = function trackPageView(dataLayer)
{
    //Map to hold all the context data mapping
    var contextDataMap = getContextDataMap(dataLayer);      
    
    //invokes s.t() with all the page measurements
    Analytics.trackState(contextDataMap.pagename, contextDataMap);
    
}

/**
     * tracks the Error pageView
     * fetches the data layer and creates measurements and sends image request
 **/
global.trackPageError = function trackPageError(dataLayer)
{
    /*trackingType = "errorPageView";
    console.log( trackingType +':'+JSON.stringify(dataLayer));

    Analytics.trackAction("event tracking", contextDataMap);
    */
    
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
 * sets the context data map name and value
 */
function getContextDataMap(dataLayer) {

	if(dataLayer){
		return {
			"pagename" : (dataLayer.page && dataLayer.page.pageInfo) ? getPageName(dataLayer.page.pageInfo.pageName) : "no value",
			"sitetype" : getSiteType(),
			"shoptype" : getShopType(),
			"referrer" : getReferrer(),
			//"previouspagename" : s.pageName ? s.getPreviousValue(s.pageName, 'gpv_pn', '') : "no value",
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

/**
 * 
 * utility function to get the value of the context data key 
 * @returns {String} the value of the context data value
 */
function getContextDataValue(obj,key){
    if (obj.hasOwnProperty(key))
       return obj[key];
}
   


   


