# Instant HTTP ⚡
## The simple static HTTP server generator, that launches a server in 1 line of code.

Serve websites, documents, images and more with 22 characters of code. Uses [Express.js](https://expressjs.com/), the most popular web server library for Node.js.

Got no idea how to JavaScript at all? Skip to the step-by-step tutorial

## Features

- Create servers in 1 line of code
- Customisable options
- Supports synchronous and asynchronous callbacks ( with returned values in the future)
- Only uses 1 direct dependency (Express.js)
- Open Source! Anyone can help improve this package, and all the (very simple) code is available to check out yourself.

## Basics

#### Install:
```
npm i instanthttp
```

#### Start a simple server:
```javascript
require('instanthttp')()
```
#### Add some options (listed below):
```javascript
require('instanthttp')({
    options: 'here'
})
```
#### Adding a callback synchronously
```javascript
require('instanthttp')({}, (data)=>{
    console.log('Sync Callback')
    console.log(data)
})
```
_**Note:** You need to have an object (empty or with options) as the first parameter when using synchronous callbacks: `require('instanthttp')({}, ()=>{})`_

#### Adding a callback asynchronously
```javascript
require('instanthttp')()
.then((data)=>{
    console.log('Async Callback')
    console.log(data)
})
```

## Options
```javascript
// Option types. (Enter in a value of that type)
const options = {
    prod: Boolean,
    port: Number,
    dir: String
}
require('instanthttp')(options)
```
- `options.dir` needs to be compatible with Express.js's Static method (see [here](https://expressjs.com/en/starter/static-files.html)). It's passed into `express.static(options.dir)`
- If `options.production` is not specified, it will be determined by `process.env.NODE_ENV` (set in .env file or by hosting services). If neither is provided, it will be assumed as `'development'`.


## Get started
Need to setup a server, but don't know JavaScript?
- Move all of your files into a new folder named `public` in the same directory.
- Open a terminal in the current directory, and type `npm i instanthttp`
- Create a file named `index.js` and copy the following line into it. (Services like Heroku will launch index.js automatically.)
```javascript
require('instanthttp')()
//OR
require('instanthttp')({prod:true})
```
- Production True: `websiteORip/anythinginthepublicfolder`
- Production Empty: `websiteORip:3000/anythinginthepublicfolder`

_**Note:** Use {prod:true} when hosting a server such as Heroku._

And presto! We have a server running serving files from images, documents to websites.


## Possible Future Development/Features
- Website Templates
- Improved Helper
- More options, with less code
- Video Tutorial on setting up a server
- Multiple Ports
- Class Structure

## 🚨Known Issues🚨
- When running `node ./folder/file.js`, the directories aren't available. The quickest fix is to just get into the folder (`cd folder`), then run `node file.js` from within the directory.
- The current /InstantHTTPHelper uses a CDN for Bootstrap, therefore, it can only load styles whilst connected to the internet.

# Credits

Made by NeuronButter (ooh! that's me), first version made a few thousand feet up in the air on a plane.

Uses one dependency, [Express.js](https://expressjs.com/), for HTTP server.