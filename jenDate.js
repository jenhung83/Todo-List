// module.exports.getDate = exports.getDate 可以省略module
exports.getDate = function (){
    const today = new Date();
    const options = {
        weekday: "long",
        // year: "numeric",
        month: "long",
        day: "numeric",
    }
    return today.toLocaleDateString("en-US", options); // zh-Hans-CN
};

exports.getDay = function (){
    const today = new Date();
    const options = {
        weekday: "long"
    }
    return today.toLocaleDateString("en-US", options); // zh-Hans-CN
};