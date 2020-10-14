

describe('test in demo.test.js file', () => {
  test('strings should be equals', () => {
  
    // 1. Inicilizacion
    const mensaje = 'Hola Mundo';
  
    // 2. Estimulo
    const mensaje2 = `Hola Mundo`;
  
    // 3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
