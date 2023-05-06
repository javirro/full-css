## Recommended properties order in CSS

* Propiedades de posicionamiento
* Propiedades de Box Model
* Propiedades de texto
* Propiedades visuales (colors, borders, background)
* Rest of properties

### ViewPort

ViewPort: área útil donde se  mostrará la página. Es el área sin tener en cuenta el scroll.

* vw: View Width. Es el ancho del viewport.
* vh: View Height. Es el alto del viewport.
* vmax: Utiliza el valor más grande entre el ancho y alto del viewport.
* vmin: Utiliza el valor más pequeño entre el ancho y el alto
* 1vw: Es el 1% del valor del viewport.
* 1vh: Es el 1% del valor del viewport.
* 100vw: Suele dar problema en vista desktop porque cuenta la barra de scroll derecha. Entonces añade un pequeño scroll horizontal. Mejor evitar esto.

## After & Before

Pseudolementos que son hijos del elemento al que se lo apliquemos. (Los pseudoelementos por defectos son elementos de línea (inline))

* Los pseudoelementos no se representan en el DOM.
* Se puede aplicar cualquier propiedad a los pseudoelementos (ej como si fuese un span).
* Obligatorio debe tener la propiedad **content** para mostrar el contenido, sino, no muestra nada.
* Estos pseudoelementos no se pueden utilizar en <img> o en <input>

