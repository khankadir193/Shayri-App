const ApiData = require('./ApiData.json')

const getData = async ()=>{

    // console.log('Api data comming from json Object...',ApiData);
    return  await JSON.stringify(ApiData);
}

module.exports = getData;