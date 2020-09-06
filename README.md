#I Sure Love Taking Classes Online

##Inspiration
We've all had the lovely experience of waking up in the morning, ready to start another day of Zoom University. Too bad the Zoom prompt doesn't give you handy loading screen tips... But now it can! Just install our userscript, which can be used through Tampermonkey, and open a Zoom link of your own or visit isurelovetakingclasses.online to get that lovely loading screen experience before your next class at Zoom University.


##What it does
Every time you reload the page, a new tip appears to help you through your online classes! Visit isurelovetakingclasses.online to test it out for yourself. Then, install our lovely userscript to customize your own Zoom loading screens with our glorious tips.


##How I built it
We used HTML and CSS to design the website, with the Zoom website as inspiration. Javascript came in handy to give us a new tip each time you refresh your page (in both our website and your Zoom site). To generate new tips, we created an array of funny tips and used a random number generator to select a new tip from the array.


##Challenges I ran into
We had a few bugs with our userscript where the original Zoom message wasn't overwritten by our userscript, but we fixed that by adding in a callback in case of an error. We found out, after digging into Zoom's website code, that Zoom's website calls a JavaScript function to dynamically populate the page. This causes issues with our userscript's code injection since if the website loads too slowly, our userscript can't find the proper element to edit and will thus throw an error. To remedy this, we catch the error if it occurs and set a delay to re-try the script injection after some time (which the page has hopefully loaded by).


##Accomplishments that I'm proud of
We're very proud of the fact that we were able to not only create a fun website but also mimic Zoom's own website very well! During our development process we were also able to learn more about css and it's variety of properties (for example, box shadows), which was really amazing! Also, we were able to dig through Zoom's code to debug our userscript and we're especially proud of that!


##What I learned
We didn't know how to create a userscript and make it interact with a webpage before this hackathon, and that was really cool to learn! We also learned a lot about looking through the source code for the Zoom website when debugging our userscript. When creating our website, we learned some new CSS features, such as using a "box-shadow" to create the grey line under the navigation bar. In addition, one of our teammates had never been to an MLH hackathon before, so this was a fun chance for them to learn about the hacker community.


##What's next for I Sure Love Taking Classes Online
We plan to create our own Chrome/Firefox browser extension to add special messages and features to personalize your Zoom soon. In the meantime, we will be telling all our friends to install the userscript since it has the same functionality that a browser extension would. Beyond that, we hope to create more awesome websites for future hackathons. Our refreshed HTML/CSS experience will be helpful in that regard.
