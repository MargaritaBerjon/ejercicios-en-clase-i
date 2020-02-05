# Introducción a Flexbox

## ¿A quién afecta flex?

- Con flex solo son afectados el contenedor `.container` y a sus hijos directos `.item`.
- Los nietos del contenedor no se ven afectados.

## ¿Dónde se aplican?

- Se aplican los estilos del contenedor (dirección, distribución...) en el contenedor.
- Se aplican los estilos comunes a todos los hijos a una clase común para todos los hijos (item).
- Si uno de los hijos tiene una disposición o tamaño diferente se le aplica estilos solo a ese hijo `.item-x`.

## Procedimiento normal

- Se recomienda aplicar `box-sizing` y `border` o `background-color` al contenedor y a los hijos para visualizar cómo se comportan (después se puede borrar).
- Indicar en el contenedor: `display: flex`.
- Indicar en el contenedor la dirección del **eje principal**: `flex-direction: row, column...`.
  - No hay que confundir eje principal con eje horizontal, ni eje secundario con eje vertical.
  - Hay que tener muy muy claro cuál eje queremos que sea el principal y cuál el secundario.
- Indicar en el contenedor si queremos que los items salten de línea o se mantengan en una sola: `flex-wrap: wrap`. A lo mejor es necesario añadir muchos hijos para poder ver el salto de línea.
- Indicar en el contenedor cómo se alinean o distribuyen los items en el eje principal, en el caso de que sobre o falte espacio: `justify-content: center`.
- Indicar en el container cómo se alinean o distribuyen los items en el eje secundario: `align-items: center`.
- Indicar a todos los items el tamaño que deben tener: ancho si el eje principal es horizontal o alto si el eje principal es vertical.

## Procedimiento avanzado

- Si queremos indicar un ancho variable en función del espacio sobrante o el espacio que falta usamos: `flex-grow`, `flex-shring`.
- Si queremos indicar un ancho inicial antes de repartir usamos: `flex-basis`
- Si queremos usar un ancho fijo usamos: `width`
- Indicar en un item el tamaño especial que debe tener: `flex-grow`, `flex-shring` y `flex-basis`.
