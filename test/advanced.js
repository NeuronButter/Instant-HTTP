/*
=============
ADVANCED TEST
=============
This tests sync callbacks, async callbacks and all options.

Expected Result:
Going to http://localhost:81/index.html produces "Success in /custom"
Going to http://localhost:81/instanthttphelper produces an error
*/

require('../index')({
    prod: true,
    port: 81,
    dir: 'custom'
}, ()=>console.log('Sync Callback'))
.then(()=>console.log('Async Callback'))