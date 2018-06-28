var SingletonTester = (function () { 
    //单例方法 
    function Singleton(args) { 
        var args = args || {}; 
        this.name = 'SingletonTester'; //方法对外的属性，另外一种方式就是返回对象 
        this.pointX = args.pointX || 6; 
        this.pointY = args.pointY || 10; 
    } 

    //单例实例 
    var instance; 

    //返回对象 
    return { 
        name: 'SingletonTester', 

        getInstance: function (args) { 
            if (instance === undefined) { 
                instance =  Singleton(args); 
            } 
            return instance; 
        } 
    }; 
})(); //直接执行该方法 

//测试 
var test = SingletonTester.getInstance({ pointX: 5 }); 
console.log(test.pointX);