// 环视
const regexStr = `THE RIME OF THE ANCYENT MARINERE, IN SEVEN PARTS.
How a Ship having passed the Line was driven by Storms to the cold Country towards the South Pole; and how from thence she made her course to the tropical Latitude of the Great Pacific Ocean; and of the strange things that befell; and in what manner the Ancyent Marinere came back to his own Country.
         It is an ancyent Marinere,
         "God save thee, ancyent Marinere!
         "I fear thee, ancyent man!
         a Marinere 
         `
// 正前瞻
//["ANCYENT ", "Ancyent ", "ancyent ", "ancyent "]       
console.log(regexStr.match(/ancyent (?=marinere)/ig))

// 反前瞻
// ["ancyent "]
console.log(regexStr.match(/ancyent (?!marinere)/ig))

// 正后顾
// [" MARINERE", " Marinere", " Marinere", " Marinere"]
console.log(regexStr.match(/(?<=ancyent) marinere/ig))

// 反后顾
console.log(regexStr.match(/(?<!ancyent) marinere/ig))