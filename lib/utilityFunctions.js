'use strict';


const classSearch = (obj, term, arr = []) => {
  let arrToReturn = []
  if (obj.class && (obj.class === term)) {
    arrToReturn.push(obj)
  }
  if (Array.isArray(obj)) {
    for (let k = 0; k < obj.length; k++) {
      arrToReturn = arrToReturn.concat(classSearch(obj[k], term, arrToReturn))
    }
  }
  if (obj.subviews) {
    for (let i = 0; i < obj.subviews.length; i++) {
      arrToReturn = arrToReturn.concat(classSearch(obj.subviews[i], term, arrToReturn))
    }
  }
  if (obj.contentView) {
    for (var j in obj.contentView) {
      arrToReturn = arrToReturn.concat(classSearch(obj.contentView[j], term, arrToReturn))
    }
  }
  if (obj.control) {
    for (var g in obj.control) {
      if (obj.control[g] === term) {
        arrToReturn.push(obj.control)
      }
      arrToReturn = arrToReturn.concat(classSearch(obj.control[g], term, arrToReturn))
    }
  }
  return arrToReturn
}

const identifierSearch = (obj, term, arr = []) => {
  let arrToReturn = []
  if (obj.identifier && (obj.identifier === term)) {
    arrToReturn.push(obj)
  }
  if (Array.isArray(obj)) {
    for (let k = 0; k < obj.length; k++) {
      arrToReturn = arrToReturn.concat(identifierSearch(obj[k], term, arrToReturn))
    }
  }
  if (obj.subviews) {
    for (let i = 0; i < obj.subviews.length; i++) {
      arrToReturn = arrToReturn.concat(identifierSearch(obj.subviews[i], term, arrToReturn))
    }
  }
  if (obj.contentView) {
    for (var j in obj.contentView) {
      arrToReturn = arrToReturn.concat(identifierSearch(obj.contentView[j], term, arrToReturn))
    }
  }
  if (obj.control) {
    for (var g in obj.control) {
      if (obj.control[g] === term) {
        arrToReturn.push(obj.control)
      }
      arrToReturn = arrToReturn.concat(identifierSearch(obj.control[g], term, arrToReturn))
    }
  }
  return arrToReturn
}

const classNamesSearch = (obj, term, arr = []) => {
  let arrToReturn = []
  if (obj.classNames && (obj.classNames.includes(term))) {
    arrToReturn.push(obj)
  }
  if (Array.isArray(obj)) {
    for (let k = 0; k < obj.length; k++) {
      arrToReturn = arrToReturn.concat(classNamesSearch(obj[k], term, arrToReturn))
    }
  }
  if (obj.subviews) {
    for (let i = 0; i < obj.subviews.length; i++) {
      arrToReturn = arrToReturn.concat(classNamesSearch(obj.subviews[i], term, arrToReturn))
    }
  }
  if (obj.contentView) {
    for (var j in obj.contentView) {
      arrToReturn = arrToReturn.concat(classNamesSearch(obj.contentView[j], term, arrToReturn))
    }
  }
  if (obj.control) {
    for (var g in obj.control) {
      arrToReturn = arrToReturn.concat(classNamesSearch(obj.control[g], term, arrToReturn))
    }
  }
  return arrToReturn
}

module.exports = { classSearch, identifierSearch, classNamesSearch }