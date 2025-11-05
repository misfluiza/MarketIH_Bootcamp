sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"marketih/test/integration/pages/MarketIHList",
	"marketih/test/integration/pages/MarketIHObjectPage"
], function (JourneyRunner, MarketIHList, MarketIHObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('marketih') + '/test/flp.html#app-preview',
        pages: {
			onTheMarketIHList: MarketIHList,
			onTheMarketIHObjectPage: MarketIHObjectPage
        },
        async: true
    });

    return runner;
});

