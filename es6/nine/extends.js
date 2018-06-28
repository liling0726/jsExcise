class Rectangle{
    constructor(length,width){
        this.length = length
        this.width = width
    }
    getArea(){
        return this.length * this.width
    }
    static create(length,width){
        return new Rectangle(length,width)
    }
}

class Square extends Rectangle{
    constructor(width){
        super(width,width)
        /* return {
            length:width,
            width:width
        } */
    }
}

//const square = new Square(30)
const square = Square.create(30,30)
console.log(square.getArea())