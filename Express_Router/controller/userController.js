const data = require('../data.js')

const allUser =  (req , res) =>{
    res.send(data);
}

module.exports  = {allUser}