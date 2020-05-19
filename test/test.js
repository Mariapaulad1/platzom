
const expect = require('chai').expect
const platzom = require('..').default 

describe('#platzom', function () {

it('Si la palabra termina en ar se le quita ar', function () {
   const translation = platzom("Programar")
   expect(translation).to.equal("Program")
})

it('Si la palabra inicia con z se añade "pe" al final', function () {
	const translation = platzom("Zorro")
   expect(translation).to.equal("Zorrope")
})
it('Si la palabra traducida tiene 10 o más letras se parte a la mitad y se une con -', function () {
	const translation = platzom("Abecedario")
   expect(translation).to.equal("Abece-dario")
})
it('Por último si la palabra original es un palíndromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function () {
  const translation = platzom("sometemos")
   expect(translation).to.equal("SoMeTeMoS")
})

})