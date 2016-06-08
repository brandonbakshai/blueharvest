REGARDING THE DESIGN OF THE DATABASE
We are using a nosql databse (MongoDB). So, there are a few key things we need
to remember. 
    We don't have joins:
        This means our database can't and shouldn't be as normalized as it would
        if it were relational. We're going to have some duplication of data. For
        example, we'll have a User schema, with all the attributes relating to
        the User, and we'll have a Bounty schema with one of the attributes
        being the User(s) who created that Bounty. But there won't be a
        reference to the particular User object within the particular Bounty
        object. Instead we can store the names both in a User object and in a
        Bounty object. 
        
        PROBLEM: How to synchronize that duplicated data?

