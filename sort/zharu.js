// 插入排序
function charu(arr){
  for(var i=1;i<arr.length;i++){
    for(var j=i;j>=0;j--){
      if(arr[j]<arr[j-1]){
       [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
      }else{
        break
      
      }
    }
  }
  return arr
}

console.log(charu([3,2,1,5,3,7]))