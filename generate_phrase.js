function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generatePhrase(options) {
  const task = {
    coder: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    startup: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let collection = []
  if (options.coder === 'on') {
    collection = collection.concat("身為一個專業的程式開發者")
    collection = collection.concat(sample(task.coder))
    collection = collection.concat(sample(phrase))
  }
  else if (options.designer === 'on') {
    collection = collection.concat("身為一個專業的設計師")
    collection = collection.concat(sample(task.designer))
    collection = collection.concat(sample(phrase))
  } else if (options.startup === 'on') {
    collection = collection.concat("身為一個專業的創業者")
    collection = collection.concat(sample(task.startup))
    collection = collection.concat(sample(phrase))
  } else {
    collection = collection.concat("你不是專業者！閉嘴！")
  }
  return collection
}
module.exports = generatePhrase


