console.log(`
=============
SIMPLE ENV TEST
=============
This tests the basic 1 line usage (forced usage of env)

Expected Result:
Going to http://localhost:4000/index.html produces "Success in /public"
Going to http://localhost:4000/instanthttphelper produces an error
`)

process.env.NODE_ENV = 'production'
process.env.PORT = 4000

require('../index')()