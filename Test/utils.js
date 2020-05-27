function getNumbers() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    return new Promise((res, rej) => {
      res([a, b]);
    });
  }
  
  function add(a, b) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(a + b);
      }, 2000);
    });
  }
  
  function createTheNode() {
    return new Promise((res, rej) => {
      res(document.createElement("h2"));
    });
  }
  
  // Escribe la función showNumbers utilizando await para mostrar el resultado en el body
  
  //let result = getNumbers() // esto es sincrono (pero la funcion no es síncrona)
  
  const getResult = async () => {
    // síncrona
    let numbers = await getNumbers(); // promesa
    let result = await add(numbers[0], numbers[1]);
    console.log(result);
    // try{}catch(e){}
    return result;
  };
  
  getResult();
  
  module.exports = {
    getResult
  };