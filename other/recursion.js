/* function resursion(str,arr,newArr,num){
  for(let i =0;i<arr.length;i++){
    if(num===0){
      newArr.length=0
    }
    const item = arr[i]
    if(item.title === str){
      newArr.push(item.title)
      return
    }
    if(item.children){
      newArr.push(item.title)
      resursion(str,item.children,newArr,1)
    }
  }
}
function findChildren(str,arr){
  let newArr = []
  resursion(str,arr,newArr,0)
return newArr
}
const a = [{
  "title": "首页",
  "children": [{
      "title": "首页-1"
  }, {
      "title": "首页-2"
  }]
}, {
  "title": "用户",
  "children": [{
      "title": "用户-1",
      "children": [{
          "title": "用户-1-1"
      }, {
          "title": "用户-1-2"
      }]
  }, {
      "title": "用户-2"
  }]
}];
console.log(findChildren('用户', a)); // 用户
console.log(findChildren('用户-1', a)); // 用户 用户-1
console.log(findChildren('用户-1-1', a)); // 用户 用户-1 用户-1-1 */
