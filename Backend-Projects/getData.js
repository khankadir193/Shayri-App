const ApiData = require('./ApiData.json')

const getData = async ()=>{
    return  await JSON.stringify(ApiData);
}

module.exports = getData;