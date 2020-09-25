function kuaipai(arr){
  if(arr.length<=1){
    return arr
  }
  const current = arr.shift()
  let left=[],right=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]<current){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return kuaipai(left).concat(current,kuaipai(right))
}
console.log(kuaipai([3,4,2,6,1,3]))