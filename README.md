# pokedex-frontend

Este es un problema común y API muy utilizada por lo que me ha resultado bastante fácil encontrar información al respecto. Había realizado un proyecto de CI/CD que a modo de ejemplo utilizaba ya esta API.

He optado por realizar una app con el siguiente **Stack**:

1. Vite : Me gusta mucho, creo que es una herramienta muy práctica y útil para desarrollar en frontend, siempre que se pueda. Ya la había utilizado antes, pero me ha ayudado consultar l aguía de inicio https://vitejs.dev/guide/
2. React : Creo que para este tipo de problema React es ideal y por eso lo he elegido. Ya la había utilizado antes, he ido consultando proyectos que ya había realizado y también he consultado respecto a los hooks https://beta.reactjs.org/reference/react/useContext
3. Tailwind CSS : No la había utilizado y quería probarla por lo que he aprovechado. He consultado mucha de su documentación empezando por https://tailwindcss.com/docs/guides/vite#react

Para ejecutar la solución:

1. Clonar el repositorio
2. Ejecutar en terminal `npm install`
3. Ejecutar en terminal `npm run dev`

# Requisitos mínimos de la prueba

Se desarrollará una aplicación web en JavaScript utilizando la API pública PokéAPI para la obtención de los datos. Los requisitos a cumplir son:

- Tienes que gestionar una aplicación con dos vistas:

  - Una vista listado con la información resumida de los Pokemons.

    > ✔️ _La aplicación cuenta con una vista de lista, que nos presenta múltiples pokemons con una información resumida de cada uno._

  - Una vista detalle con la información detallada del Pokemons seleccionado.
    > ✔️ _Cuando hacemos click sobre uno de los pokemons en la vista de lista, vamos a la vista detalle, en la que podemos encontrar más información del pokemon en concreto_

- ¡Cuidado! en la región de Sinnoh hay innumerables Pokemon, por lo que se recomienda
  paginar los resultados.

  > ✔️ _Los resultados están paginados, he desarrollado un hook usePaginationFetch para ir obteniendo los resultados a medida que el usuario va visualizando las cartas de la vista listado. Me he basado en este [vídeo](https://youtu.be/pc3fgKYcEAQ) de YT. He optado por realizar una paginación del lado del servidor (creo que se llama así), creo que es lo correcto ya que la pokeApi ya esta preparada para este caso con los paámetros de limit y offset. Pero debido a que la información de los pokemons en la vista general es poco pesada, solo texto, creo que en un caso real se podría hacer mejor una paginación del lado del cliente, haciendo una o pocas peticiones y almacenando un estado global de la aplicación. Esto me hubiera permitido representar los pokemons con más información en la vista general, como los colores por ejemplo._

- Ordenar la información y estructurar la aplicación. Lo fácil sería que te pasáramos un mockup o diseño, pero queremos que pienses cual es la mejor forma de estructurar, agrupar y mostrar la información.

  > ✔️*Inicialmente hice un diseño a papel y tenía claro que quería representar. Me he inspirado un poco en las cartas pokemon, tanto para la vista cuadrícula como para la vista detalle. A parte de eso cumpliendo los requisitos he diseñado el resto. Hubiera sido mejor si se pudiera accedera una página en concreto o contar con un buscador.*

- Añadir una acción para poder cambiar entre modo oscuro o modo claro la aplicación.

  > ✔️ _He añadido un toggle que permite cambiar el modo de la aplicación entre oscuro y claro, añadiendo una clase css al elemento root de la aplicaión. También, por defecto la app detecta el modo predefinido del sistema del usuario._

- En el listado de Pokemons, habilitar una opción para poder cambiar la visualización de modo cuadrícula a modo lista.

  > ✔️ _He optado por hacer esta opción a través del enrutamiento, de forma que en la barra de navegación puedas seleccionar la visualización en modo cuadrícula o lista. Puede que hubiera sido mejor realizarlo mediante un toggle y un cambio de estado._

# Para nota

Además de los requisitos mínimos para la prueba, hemos definido una serie de bolas extras para que puedas lucirte:

- Testing. No es imprescindible, pero si vienes con nosotros vas a tener que aprender a testear tu código, puede ser un buen momento para empezar.

> _No he realizado testing, le elección inicial de la herramineta de desarrollado Vite, era en parte también para hacer uso del framework de pruebas Vitest, finalmente no ha sido posible._

- Variables CSS. CSS no es un lenguaje de programación pero existen técnicas que hacen el código CSS más mantenible.

> _✔️He elegido Tailwind CSS debido a este requisito, personalmente a mí me ha gustado mucho porque te deja mucha libertad, flexibilidad y a la vez tienes casi todos los estilos en el mismo sitio que tu código, en este caso en los ficheros .jsx. Aunque entiendo también que pueda parecer desordenado al tener tantos atributos y pueda hacer que el código sea menos legible. Si los usas con componentes creo que es genial. También he añadido alguna variable de CSS para los colores de los tipos de los Pokemons._

- Typescript. Javascript no es un lenguaje tipado, Typescript ha venido para quedarse.

> _No he utilizado Typescript, me hubiera gustado pero ya era overkill, para el próximo proyecto_

- Responsive Design. ¿Mobile, desktop o tablet? O mejor si funciona tu aplicación en todos ellos.

> _✔️He tenido en mente que sea responsive, en general se ajusta bastante bien y la funcionalidad es correcta, pero en dispositivos pequeños el diseño ya no es tan agradable a la vista_

- Favoritos

  - Poder marcar los Pokemon como favoritos.

    > ✔️ _Se puede marcar cualquier pokemon como favorito desde la vista de cuadrícula o de lista. Haciendo click sobre la estrella en la esquina superior derecha de la carta del pokemon. Para saber si este pokemon ya se encuentra en favoritos podemos observar si la estrella esta completa o no._

  - Desarrollar una página que muestre nuestros Pokemons favoritos.

    > ✔️*Los pokemons marcados cómo favoritos se pueden ver en una página dedicada, dónde solo se muestran estos.*

  - Mantener el estado de los Pokemon guardados como favoritos aunque se recargue la página.

    > ✔️*He desarrollado una solución que mantiene el estado haciendo uso de localStorage de forma que el estado se mantiene entre sesiones. Para ello he hecho stringfy para poder almacenar un array con los índices de los pokemons favoritos, y posteriormente cuando es necesario se recupera el estado y se parsea. También para ello he hecho uso del hook básico de react useState y useEffect. Funciona bien pero creo que es un poco enrevesada a nivel de código y quizá hubiera sido mejor hacer uso de hooks como useContext o useMemo para mantener un estado de la aplicación*

# Estructura de los ficheros

En el directorio **src** encontramos:

- ficheros de estilos CSS
- componente App

También los directorios:

- assets, para imágenes svg
- tools, con funciones auxiliares
- hooks, para custom hooks
- components, el resto de componentes de React, estan organizados por niveles, si un componente se utiliza dentro de otro, el primer componente es de nivel II, y así sucesivamente. De esta forma no tienes mezclados componentes más importantes con menos y puedes jerarquizarlos. Se me ha ocurrido a mí, seguramente hay mejores formas de ordenarlos.

# Recursos que he utilizado y suelo utilizar

### Stack Overflow

### [Code Grepper](https://www.grepper.com/) : Extensión de navegador que te muestra snippets de código bajo la barra de búsqueda.

### YT

### ChatGPT : Recientemente también lo estoy utilizando, para código en general creo que esta bastante bien, pero hay que saber que preguntar por lo menos y tamb vigilar de cerca. Para debugear a veces también me funciona muy bien, pasandole logs de error.

### [FontAwesome](https://fontawesome.com/search) : Para los iconos.
