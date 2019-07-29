# gbe-ui

## Project setup

Create the development folder as needed.
For this project we manually created the src folder:

/src
    /assets
    /css
    /js
    /scss

In the /src folder, create index.html

------------

Within the folder do the ff. setup:

#1: npm init to create a package.json file
```
npm init -y
```
#2. Install several different packages as development dependencies
```
npm install gulp browser-sync gulp-sass --save-dev
```
* **gulp** is a javascript task runner. You'll see how it works shortly if you're new.
* **browser-sync** automatically refreshes our browser for us upon file changes.
* **gulp-sass** enables sass compiling with our project.

#3. Install several packages as regular project dependencies
```
npm install bootstrap jquery popper.js --save
```
* **bootstrap** of course is the bootstrap package.
* **jquery** is used by bootstrap.
* **popper.js** is also used by bootstrap. It allows for positioning of popovers, tooltips, etc..

-------------

#4. Gulp setup updated version for Gulp 4.0: https://pastebin.com/aPKti6iB

Setup Reference:
* Creating Bootstrap/HTML/SASS Setup: https://coursetro.com/posts/code/130/Learn-Bootstrap-4-Final-in-2018-with-our-Free-Crash-Course
* Formatting GIT README: https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md
