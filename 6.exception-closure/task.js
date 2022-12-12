function parseCount(arg){
  let argFunction = parseInt(arg);
  if (argFunction === NaN){
    throw new Error ('Невалидное значение')
  }
  return argFunction;
}

function validateCount(arg){
  try {
    return parseCount(arg);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2){
      throw new Error ('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter(){
    let P = this.side1 + this.side2 + this.side3;
    return P;
  }

  getArea(){
    let p = this.getPerimeter() / 2;
    let S = Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
    return +S.toFixed(3);
  }
}

function getTriangle(side1, side2, side3){
  try {
    return new Triangle(side1, side2, side3);
  } catch (error) {
    return {
      getPerimeter(){
        console.log('Ошибка! Треугольник не существует');
      },
      getArea(){
        console.log('Ошибка! Треугольник не существует');
      }
    }
  }
}