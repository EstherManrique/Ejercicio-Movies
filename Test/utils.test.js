let { getResult } = require("./utils");
//describe("",()=>{expect().toBe("resultado")})
function imprimir(numero1, numero2) {
  return numero1 + numero2;
}

describe("Esto es una suma", () => {
  it("Imprimir suma error", () => {
    expect(imprimir(2, 2)).toBe(4);
  });
  //it("Esto es un error", () => {
  //expect(imprimir(2, 4)).toBe(5);
  //});
});

describe("Test de lo de ayer de bliss", () => {
  it("Test getResult", async () => {
    let theresultado = await getResult();
    expect(typeof theresultado).toBe("number");
  });
});
