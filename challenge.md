## Desafío de Código

Resumen: Crear una vista web que muestre un mapa como sección principal, seguido de una lista de vehículos y un buscador que afecte a dicha lista.

### Requerimientos

#### Sección 1
- El mapa debe ser el elemento principal. Modificar su estilo para que no sea el predeterminado.
- En el mapa, representa la ruta proporcionada en el geojson que se obtiene del endpoint en la seccion de "Servicio":
  - Nota: El endpoint devuelve datos variados; debes identificar el geojson y representar la ruta. [Ejemplo de geojson](assets/exampleRoute.geojson)

#### Sección 2
- Representa una lista de vehículos (a partir de [la lista de vehículos ficticios proporcionada](assets/carMock.json)).
- Muestra datos del vehículo en cada fila de la lista.

#### Sección 3
- Al hacer clic en cada elemento de la tabla (vehículo), se debe mostrar un icono seleccionable dentro del mapa (la posición debe estar cerca de la ruta trazada en el mapa; cualquier posición ficticia es válida).
- Agrega un buscador que afecte a la tabla (cuantos más datos tome en cuenta el buscador, mejor).


#### Wireframe bajo nivel del posible resultado
![Ejemplo](assets/viewExample.png)
#### Servicio
- GET: `https://5qewqsdgrl.execute-api.us-west-1.amazonaws.com//challenge/route/dummy`

### Tecnologías
Idealmente, buscamos que implementes el desafío utilizando las siguientes tecnologías:
- TypeScript
- ReactJS
- Next.js
- Puedes elegir cualquier biblioteca para el renderizado de mapas u otras funcionalidades.

### Entregables

- URL de una demo en vivo; recomendamos Vercel, pero cualquier proveedor es válido.
- URL del repositorio público de GitHub.


## Tiempo Estimado

Se estima que esta prueba técnica tomará aproximadamente 8 horas para completarse.

## Recursos Adicionales

- [Documentación de React](https://reactjs.org/docs/getting-started.html)
- [Tutorial de TypeScript](https://www.typescriptlang.org/docs/)


### Extras - Opcionales
- Flujo de Git (Git flow).
- Código limpio.
- Pruebas (Testing).
- Estilo y acabado.
- Responsividad
- Cualquier mejora/funcionalidad/estilado sera tomada muy en cuenta
- El layout es solo una propuesta  no hay limite en la creatividad