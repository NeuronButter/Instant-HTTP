function generate(options, callback) {
    options = options || {}
    return new Promise(function (resolve, reject) {
        const express = require('express')
        const app = express()

        // MODE (DEVELOPMENT OR PRODUCTION)
        let mode
        if (options.prod && options.prod === true || options.prod === false) {
            if (options.prod === true) {
                mode = 'production'
            } else {
                mode = 'development'
            }
        } else {
            mode = process.env.NODE_ENV || 'development'
        }

        // PORT
        let conditional = 3000
        if (mode === 'production') {
            conditional = 80
        }
        const port = options.port || process.env.PORT || conditional

        // DIRECTORY
        options.dir = options.dir || 'public'

        app.use(express.static(options.dir))


        if (mode === 'development') {
            app.get('/instanthttphelper', function (req, res) {
                // Environment Mode is always development, because this feature is disabled in production mode.
                res.send(`<head><title>instanthttp Helper</title><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></head>
<body><div class="mt-3 container">
<h1>instanthttp Helper</h1>
<h2>Server Info</h2>
<h3>Environment Mode: <i>Development</i></h3>
<p>This is determined by <code>instanthttp({prod: true})</code>, which fallbacks to <code>process.env.NODE_ENV</code>, which fallbacks to <code>'development'</code>.</p>
<h3>Public Directory: <i>'${options.dir}'</i></h3>
<p>Defined by <code>instanthttp({dir: 'static'})</code>, which fallbacks to <code>'public'</code>. Note that this needs to be compatible with Express.js's Static method (see <a href="https://expressjs.com/en/starter/static-files.html">here</a>).</p>
<h2 hidden>Client / Request Info</h2>
<h3 hidden>TODO: Stuff here in a table</h3>
</div></body>`)
                // END res.send() (just for reference)
            })
        }
        if (mode === 'development') {
            console.log(`Presto! You're running in development mode with port ${port} meaning that host:${port}/instanthttphelper has been enabled.`)
        } else {
            console.log(`Presto! You're running in production mode with port ${port}. To enable instanthttp Helper, disable production mode.`)
        }
        if (callback) {
            app.listen(port, callback({
                port: port,
                dir: options.dir
            }))
            resolve()
        } else {
            app.listen(port)
            resolve()
        }
    });
}

module.exports = generate