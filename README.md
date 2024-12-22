Houses a simple static website, which uses dynamic routing and content generation from .md files. I'll fill out later how this works, but alot of it is based off nextjs SSG. 

_posts
works by grabbing content from .md files and creating html files dynamically. Logic is defined in /lib/posts.tsx

_forums 
works by grabbing content from .json files and creaintg html files dynamically. Logic is defined in /lib/forums.tsx
