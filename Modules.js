// at last module.exports=name;
// in another file const xyz=require('Modules');
// for multiple modules export 
// module.exports.name = name;
// module.exports.add = add;
// module.exports.sub = sub;

// module.exports={add,sub,name};


function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

const name = "Donald Trump";

module.exports = { add, sub, name };
