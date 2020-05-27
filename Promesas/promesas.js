

function getNumbers(){
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10)
    return new Promise((res,rej)=>{
      res([a,b])
    })
  }
  
  function add(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
          res( a+b)
        },2000)
    })
  
  }
  
  function createTheNode(){
    return new Promise((res,rej)=>{
       res(document.createElement('h2'))
    })
  }
  
  // Escribe la función showNumbers utilizando await para mostrar el resultado en el body 
  
  //let result = getNumbers() // esto es sincrono (pero la funcion no es síncrona)
  
  const getResult = async()=>{ // síncrona
    let numbers = await getNumbers() // promesa
    let result = await add(numbers[0],numbers[1])
    return result
    //console.log(result)
    // try{}catch(e){}
  }
  
  getResult()
  
  // reto 1: Usar getNumbers y add para sumar los primeros 2 numero y mostrar el resultado de la suma.
  
  // Reto 2: El reto 1 pero con async/await y como extra usar createTheNode para colocar en el body el resultado.

  const print = async () => {           //Síncrona
    let numbers = await getNumbers();   //Promesa
    let result = await add(numbers[0], numbers[1]);
    let drawNode = await createTheNode();
    
    console.log(numbers);
    console.log(result);
    console.log(drawNode);
    
    drawNode.innerHTML = `El resultado de la suma ${numbers[0]} + ${numbers[1]} = ${result}`;
    document.body.appendChild(drawNode);    
  } 

document.getElementById('boton').onclick = print;


