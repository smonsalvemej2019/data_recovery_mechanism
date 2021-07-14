# Data Transfer Mechanism for DevOps internship
The goal of this project is to create a migration plan to move company documents from Confluence into Microsoft Teams.

## Migration Plan 1: restAPI
Both Confluence and MS Teams provide APIs to download and upload files respectively. I believe it was best to use NodeJS for this approach, NPM offers a lot of packages that might make the data transfer easier.
### Progress

#### Week 1: 7/6 - 7/13
- The preliminary migration plan has been laid down. 
- The Confluence API has been tested trough postman and the basic JS code I wrote successfully pulls data from the API.
- Each attachment object comes with a link to download the actual file.
- **ROADBLOCK:** The link provided by the confluence API is *NOT* an API endpoint. Every time this linked is called, it will return an HTML page claiming there is an error. This HTML page is supposed to authenticate then redirect the end user to the file download, the problem is that the authentication process is dependent on embedded JavaScript that only gets processed trough a browser. My next goal is to find a workaround this problem or find a better migration plan.

### Week2: 7/13 - 7/16
- The team has helped me figure out ways to get the remotes files into my local machine.
   - Confluence pages are formatted in HTML.
   - Atachachments are included in their own directories.
   - CSS is not included.
- Next step is to think of ways to move the data from the local html files to a Microsoft service. It would be best to talk to the Microsoft Dev team before moving forward. For now it would be best to fetch the data within each HTML file, perhaps in Java Script.

**Questions to Ask MS Teams Dev Team:**

1. What service would be best to store important documentation?
   - Wiki
   - One Note
   - SharePoint
   - etc.
2. What approach is best to import data? Does the services provide an API? what kind of format works best with the application?