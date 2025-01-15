# CeliaSite
Houses a simple static website, which uses dynamic routing and content generation from .md files. I'll fill out later how this works, but alot of it is based off nextjs SSG. 

# How to use
workboard, blog, team
works by grabbing content from .md/json files (located in _<entity> folder) and creating html files dynamically. Grabbing Logic is defined in /lib/<entity>.tsx

# How to install (not tested yet)
```
npm install
npm run build // builds static files in /out

// fill in with nginx build stuff (e.g. making proxy to point to /out)
// make sure nginx is running correctly

// make sure ports are setup correctly, like firewall

// restart the nginx server

// profit

```

# How CD works
Commits trigger a Github Action, which will run the deployment script. Github Actions are more for routing and secret keeping, the actual deployment logic is handled by the script

### plans
1. I need to make a script that will automate copying the nginx files to the nginx directory, which I will then call in `npm run prod` or something

2. need to make a github listener that will initiate the build process

# Todo

- add CD pipeline. 
- add bettermotherfuckingwebsite.com or perfectmotherfuckingwebsite.com styling
- add custom team member pages
- add custom team member links
- add /blog landing page to be more informational to blog (contributor, tags, abstract)
- comments for project pages?
- add scripts for adding subdomains
- add table of contents when relevant
- add latest update view on /workboard landing page
- add site directory tree

- Separate the TODO section into todo.md and then make a page on the website that displays the todo.md

