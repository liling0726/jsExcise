function bubble(arr){
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

console.log(bubble([3,2,1,5,3,7]))