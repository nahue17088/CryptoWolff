Errores arreglados:

1) En la seccion de boton buy y send, podes agrupar la asignacion de los metodos en un solo for que recorra todas las cripto y les asigne el evento a todos, ahorrando que la asignacion sea desde la linea 46 a la 126, que sea solamente 4 lineas de codigo.
- Hecho denuevo.

2) De nuevo, el presionar el boton buy no simula nada, deberia poder tener un registro de todas las transacciones minimo, y que esta informacion se almacene en algun lado, porque sino estoy vendiendo algo ilimitado, y las criptomonedas no lo son.
- Hecho denuevo, ahora muestra si compraste cryptos en todo el tiempo que navegaste por la página (SessionStorage).

3) El boton URL, no se entiende que hace, cualquier tipo de dato que pongo me dice que es invalido, y si hago click afuera del modal me dice que salio exitosamente, proba bien este componente.
- Eliminado ya que no servia y no tenia una funcion interesante a mi gusto.

4)En la seccion del conversor, las monedas no deberian estar hardcodeadas en el html para que el sistema pueda ser considerado escalable(uno de los puntos de las rubricas de evaluacion), puedes usar la misma que consultas los valores para traer todos los nombres.
- No resuelto, se que se usa un JSON y ahi los convierto en objetos para despues mostrarlos en el HTML, no logre entender el codigo me fruste y no lo hice.

5) Siguiendo con la seccion del conversor, si no vas a realizar ningun calculo con el campo amount, deberia estar desabilitado, ya que se entiende que puedo poner cualquier numero y me daria al cambio en moneda el resultado.
- El amount esta para elegir la Divisa que queres convertir hacia otra divisa. Vos elegir 10 USD en amount y en "Converted To" Cuando clikeas en "EXCHANGE" te da lo que vale la moneda
en la otra divisa.