# Platzom

Platzom es un idioma inventado para el curso de [Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com) el mejor lugar de educación online

## Descripción del idioma

- Si la palabra termina en ar se le quita ar
- Si la palabra inicia con z se añade "pe" al final
- Si la palabra traducida tiene 10 o más letras se parte a la mitad y se une con -
- Por último si la palabra original es un palíndromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom for 'platzom'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("Abecedario") // Abece-dario
platzom("Sometemos") // SoMeTeMoS
```

## Créditos
-[Sacha Lifszyc]

## Licencia

[MIT](https://opensource.org/licenses/MIT)