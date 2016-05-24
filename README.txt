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



update on 21 May 2016
We now have a lot of the front end done. We have tiles positioned in rows, with
infinite scroll (when user reaches bottom of page, more tiles load). On clicking
any tile, the area darkens and a bigger area pops up with more info regarding
the bounty. We can make the area fill up 95% of the right space (where the tiles
usually are) and then have that as the main module where users interact with
particular bounties/projects. We can also put in another little menu bar on the
left of that popup similar to what is there now for the category choosing.
The left navbar consists of a dropdown on hover main menu and below that an
expanding/collapsing menu for sorting of bounties by category/type. 


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
