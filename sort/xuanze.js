function xuanze(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        [arr[i],arr[j]]=[arr[j],arr[i]]
      }
    }
  }
  return arr
}

console.log(xuanze([3,2,1,5,3,7]))