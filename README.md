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



# Migration Options

## Option 1: Fully Manual.
I can manually transfer the information by hand and recreate the pages with whatever service is best.

**Pros**
   - The process guarantees the pages from confluence looking almost the same to the best of my ability.
   - I can move the info to any desired extension (wiki,OneNote,SharePoint)
**Cons**
   - Time consuming
   - Human error

## Option 2: Using Enterprise Bridge
Enterprise bridge is a tool created by a company called Case Agile. The tool "guarantees" a safe migration and an exact recreation of the confluence pages.

**Pros**
   - Information is kept intact as well as the look of pages.
   - No human error.
   - Fastest solution
**Cons**
   - Only works for SharePoint
   - The software must be paid for.
   - Does not guarantee that it will work.
   - Might not be worth it due to the low amount of files being transfer.

## Option 3: Partly Automated
I can use APIs to transfer the html of the page and then edit each page inside the service.

**Pros**
   - Information will be passed accurately.
   - Less prone to human error.
   - Not as slow as the full manual approach.
**Cons** 
   - Might only work with OneNote
   - While it is now as slow as option 1, it might still be time consuming.

## Option 4: Fully Automated (If Possible)
Find a way to transfer the data from the exported confluence data and import it accurately trough API calls.

**Pros**
   - The process itself is fast.
   - No human error if code written correctly.
   - The code might be edited or reused for future transfers
   - Might work in any service (TBD)
**Cons**
   - Coming up with a code that is efficient and does everything might be more time consuming than option 1 and 2.
   - Not all tools might be supported (TBD)
   - Other options are simpler. 

**Questions to Ask MS Teams Dev Team:**

1. What service would be best to store important documentation?
   - Wiki
   - One Note
   - SharePoint
   - etc.
2. What approach is best to import data? 
3. Does the services provide an API? 
4. What kind of format works best with the application?
