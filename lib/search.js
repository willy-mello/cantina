
const { View } = require('./view')
const information = require('./data.json')
const Tree = new View(information)
exports.tree = Tree