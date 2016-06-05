BLUE HARVEST (temporary name)

Ishan Guru
Brandon Bakhshai

BACKEND
    we want to do this right, we want the best tech right now
    so we minimize buildup of technical debt. We need a scalable database,
    that means nosql. We also need a high-performance backend, specifically to
    support things like chat which is asynchronous. For that node.js is the best
    hands down. 

server
    django vs rails vs node.js
        node.js is going to be the highest performace. the downside is that we
        have to learn javascript, but I think it should be worth it. So my vote
        is for node.js, I think you feel the same way.
        

database
    nosql vs sql 
        let's definitely go with nosql: 
        http://stackoverflow.com/questions/3423193/why-nosql-say-traditional-rdbms-is-not-good-at-scalable

On that note, we should just go with the entire MEAN stack. 
Mongo
Express.js
Angular.js
Node.js



update on 21 May 2016:
We now have a lot of the front end done. We have tiles positioned in rows, with
infinite scroll (when user reaches bottom of page, more tiles load). On clicking
any tile, the area darkens and a bigger area pops up with more info regarding
the bounty. We can make the area fill up 95% of the right space (where the tiles
usually are) and then have that as the main module where users interact with
particular bounties/projects. We can also put in another little menu bar on the
left of that popup similar to what is there now for the category choosing.
The left navbar consists of a dropdown on hover main menu and below that an
expanding/collapsing menu for sorting of bounties by category/type. 

update on 28 May 2016:
I completed work on the tile design, with statistics in the title bar and
tagline and authors in the whitespace. I'm working now on building the popup 
that comes up when a tile is clicked. I'm generating all that stuff with a tag 
using angular.js. So the real work is in generating the div structures in
angular. After finishing that, we need to incorporate the git gists in the popup
menu. We also need to look into chat. I'm wondering if slack has an api where we
can implement chat just through them and with their servers taking the load. If
not, though I think it's necessary to implement chat completely on our own. I
think having chat and also some sort of forums and comment threads can help
build a community which will be the heart of the site. In terms of structural
things to do, we also need to of course connect the site to a database (mongo).
I'm thinking we'll set up a mongo instance on amazon web services and use that.
It's not much different from how we connected to postgresql, but we do need to
design our database schema somewhat. Mongo doesn't exactly have a schema but we
need to decide how we're going to store the data so that it's easiest to
retrieve and parse and all that.

update on 30 May 2016:
I've been trying to decide which MEAN framework to use: mean.js, mean.io,
meteor.js. And I've come to the conclusion that we should build our own custom 
MEAN stack. I don't want to be tied to any particular framework. meteor.js for
example has some issues with scaling to handle many concurrent users. Something
else to note is that Node, Express, Angular, and Mongo are all very mature, 
well-documented technologies with awesome communities. meteor.js has a pretty
lively community but it's not as stable as the individual communities of
the general MEAN stack. Lastly, if for some reason we want to switch out one of
the letters of the MEAN stack for something else, we can do so. With something
like meteor.js, we are tied to the components already built into the framework.
Now the advantages of meteor.js are significant, they have hot-code push which
means that whenever code is updated on the server side, the client side gets
updated automatically without reloading the page. That's definitely nice. meteor
also allows you to deploy your app with one command I think to be something like
myapp.meteor.com. This is also cool for something like a hackathon but doesn't
really help us in a real production setting. 

I've been basically just using angular.js (the A in
MEAN) to develop the front end of the site, using node superficially to serve
the site locally. The front-end is still not even close to done, there is a lot
we still need to do. I got to a point where I need a back-end to start serving me
the data and have the front-end actually interact with the back-end, so I
started researching the MEAN stack and the MVC design paradigm. 

Trying to decide now between MEAN and MERN (replacing angular with react and
flux)


rough design notes (not really complete):
Bounty Module
    Navigation
        projects
        sort by
            most viewed
            most contibutors
            most upvoted
    Statistics
        # total contributors
        # projects
        # upvotes
        # downvotes
        filters
        languages


    Description

Project Module
    Navigation (same as above)
    Statistics
        contributors


what stats to keep?
    total contributors
    total projects

