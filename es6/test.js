/* var name = 'global'
 var obj = {
     name:'name',
     does:function(){
         console.log(this)
         this.name = 'does'
         return function(){
            console.log(this)
             return this.name
         }
     }()
 }

 console.log(obj.does())

 */
