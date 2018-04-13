module.exports = function utfToIso(varJson){
   // eachRecursive(varJson['_doc'])
console.log(varJson['_doc']);

//varJson[key] = decodeURIComponent(escape(varJson[key]));
    /*for (var key in varJson['_doc']) {
        if (varJson['_doc'].hasOwnProperty(key)) {
            console.log(key + " -> " + varJson['_doc'][key]);
        }
    }*/


    return varJson;
}


function eachRecursive(obj)
{
    /*for (var k in obj)
    {
        if (typeof obj[k] == "object" && obj[k] !== null)
            eachRecursive(obj[k]);
        else{
            console.log(obj[k]);
        }*/
}
