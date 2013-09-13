
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Receipt verification (https://github.com/mozilla/receiptverifier)
    require('receiptverifier');

    // Installation button
    require('./install-button');

    // Install the x-view and x-listview tags
    require('layouts/view');
    require('layouts/list');

    // Write your app here.

    function formatDate(d) {
        return (d.getMonth()+1) + '/' +
            d.getDate() + '/' +
            d.getFullYear();
     }

    // Passing a function into $ delays the execution until the
    // document is ready
    $(function() {

        // List view
        var list = $('.list').get(0);
        list.add({ title: 'About the Event',
                   desc: 'Goals of the Event',
			   line1 : 'Educate and inspire developers to work on HTML5 apps and submit them to the Firefox Marketplace',
			line2: 'Amplify and inspire grassroots developer momentum worldwide',
			line3: 'Create opportunities for local developers to showcase their apps ',
			line4: 'Raise awareness of Firefox OS and the developer ecosystem',
			map:'',
                   date: new Date() });
        list.add({ title: 'Event Schedule ',
                   desc: 'Schedule',
				line1 : ' Saturday 26th January 2013',
				line2 :'8:00 AM to 7:00 PM',
				line3 :'Registrations open 8:00-9:00 AM',
				line4 :'',
				map:' ',
                   date: new Date(12, 9, 5) });
        list.add({ title: 'Event Venue',
                   desc: 'Venue Address',
				line1 : 'ThoughtWorks Technologies (India) Pvt Ltd. ',
				line2 :'ACR Mansion G + 3floors',
				line3 :'147/F, 8th Main, 3rd Block',
				line4 :'Koramangala, Bangalore-560034, India',
			map:'https://maps.google.co.in/maps?ie=UTF8&cid=1254344641276619441',
                   date: new Date(12, 10, 1) });
        list.add({ title: 'Get started',
                   desc: 'Get started',
			line1 : 'https://addons.mozilla.org/en-US/firefox/addon/firefox-os-simulator/',
			line2 :'http://www.mozilla.org/en-US/firefoxos/',
				line3 :'https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS',
						line4:'https://marketplace.firefox.com/developers/',
				map:'',
                   date: new Date() });
        list.add({ title: 'Get Social',
                   desc: 'Get Social',
				line1 :'https://www.facebook.com/groups/141918585960338/',
				line2 :'https://twitter.com/mozillaIN',
				line3 :'For all the photos, tweets use #hashtag #FirefoxOSAppDays',
				line4 :'For general inquires at the event tweet using #appDayHelpIN',
				map:'',
                   date: new Date(12, 9, 5) });


 list.add({ title: 'Register',
                   desc: 'Register',
				line1 :'',
				line2 :'',
				line3 :'',
				line4 :'',
				map:'',
                   date: new Date(12, 9, 5) });





        list.nextView = 'x-view.details';

        // Detail view
        var details = $('.details').get(0);
        details.render = function(item) {
            $('.title', this).text(item.get('desc'));
		 $('.desc', this).text(item.get('desc'));
		$('.line1', this).text(item.get('line1'));
		$('.line2', this).text(item.get('line2'));
		$('.line3', this).text(item.get('line3'));
		$('.line4', this).text(item.get('line4'));
		$('.map', this).text(item.get('map'));
        };
    });
});