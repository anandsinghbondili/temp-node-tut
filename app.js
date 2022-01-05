//npm - global command, comes with node
//npm --version

//local depedency - use it only in this particular project
//npm i <packaage name>

//global dependency - use it in any project
//npm install -g <package name>
//sudo npm install -g <package name> (mac)

//package.json - manigest file (stores important informaton about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init(step by step, press enter to skip)
//npm init -y (everrything default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);