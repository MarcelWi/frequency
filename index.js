function getFrequencyTypeSegment(domain) {
    // let segmentID = window.Kameleoon.API.CurrentVisit.customData.Piano;
    /**
     *    Demo-Array as example
     */
    var segmentIDs = [
        "lowfrequencyUser",
        "mediumfrequencyUser",
        "highfrequencyUser",
        "iOSUser",
        "androidUser",
        "windowsUsers"
    ];
    /**
     * add an empty value to the array if no data is present so that the function getFrequencyTypeSegment(domain); can be output
     */
    segmentIDs = segmentIDs.length ? segmentIDs : [''];
    /**
     * function: isFrequencyTypeSegment
     * example function call: getFrequencyTypeSegment('welt.de', 'highfrequencyUser');
     * @param domain: string, defines the website domain you are interested in
     * @param segmentID: string, defines frequency segment id for this domain
     * @returns boolean: true or false
     */
    function isFrequencyTypeSegment(domain, segmentID) {
        /**
         * array: frequencyUsers
         * for all frequency values in segentID-Array
         */
        var frequencyUsers = ['lowfrequencyUser', 'mediumfrequencyUser', 'highfrequencyUser'];
        /**
         * object: persistedQueryId
         * key: Domain for example 'welt.de'
         * value: persistedQueryIdValue
         */
        var persistedQueryId = {
            'welt.de': 'abcdef',
            'bild.de': 'ghijkl'
        };
        /**
         * check if segment ID array has values
         * if: return true if segmentID vulues of the values in the array: frequencyUsers
         * else: in some cases the object window.Kameleoon.API.CurrentVisit.customData.Piano does not
         *       exists and has to be populated with data.
         *       to populate this object use this given function:
         *       window.cX.getUserSegmentIds({persistedQueryId: persistedQueryIdValue})
         */
        if (segmentID.length) {
            return frequencyUsers.indexOf(segmentID) >= 0;
        }
        if (window.cX.getUserSegmentIds) {
            window.cX.getUserSegmentIds({ persistedQueryId: persistedQueryId[domain] });
        }
    }
    /**
     * Go through all values in the array and return the correct segment ID
     */
    segmentIDs.forEach(function (segmentID) {
        if (isFrequencyTypeSegment(domain, segmentID)) {
            return segmentID;
        }
    });
}
/**
 * function: getFrequencyTypeSegment,
 * example function call: getFrequencyTypeSegment("welt.de")
 * this returns frequency segment id for this domain for this user, example: "highfrequencyUser"
 *
 * @param domain: string, defines the website domain you are interested in
 * @returns string
 */
getFrequencyTypeSegment('welt.de');
