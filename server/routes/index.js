const userroutes = require('./userroutes')

module.exports = function(app, dbs) {
    app.use('/api/user',userroutes)
    
  
    return app
  }