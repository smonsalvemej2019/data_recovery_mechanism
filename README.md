# Data Transfer Mechanism for DevOps internship
The goal of this project is to create a migration plan to move company documents from Confluence into Microsoft Teams.

## Migration Plan 1: restAPI
Both Confluence and MS Teams provide APIs to download and upload files respectively. I believe it was best to use NodeJS for this approach, NPM offers a lot of packages that might make the data transfer easier.
### Progress

#### Week 1: 7/6 - 7/13
- The preliminary migration plan has been laid down. 
- The Confluence API has been tested trough postman and the basic JS code I wrote successfully pulls data from the API.
- Each attachment object comes with a link to download the actual file.
- ** ROADBLOCK: ** The link provided by the confluence API is *NOT* an API endpoint. Every time this linked is called, it will return an HTML page claiming there is an error. This HTML page is supposed to authenticate then redirect the end user to the file download, the problem is that the authentication process is dependent on embedded JavaScript that only gets processed trough a browser. My next goal is to find a workaround this problem or find a better migration plan.