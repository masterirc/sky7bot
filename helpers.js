function successfullMessage(msg) {
    return "โ *๊แต๐7โฆ Bot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "โฃ *๊แต๐7โฆ bot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "โข *๊แต๐7โฆ Bot :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
