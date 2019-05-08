const fetch = require("node-fetch")
const { View } = require('./view')
const information = require('./data.json')
const state = {}
const getData = async () => {
  console.log('called get data')
  try {
    const req = await fetch('https://raw.githubusercontent.com/jdolan/quetoo/master/src/cgame/default/ui/settings/SystemViewController.json')
    const data = await req.json()
    return data
  }
  catch (err) {
    console.error(err)
  }
}

// const makeTree = async () => {

//   const rect = await new View(getData())
//   return rect
// }
// const Tree = new View(getData())
const Tree = new View(information)
exports.tree = Tree