# Aprendiendo sobre TailWindCSS

¡Hola! Los siguientes comandos te enseñarán a instalar TailwindCSS en tú proyecto y a como optimizarlo para producción (se utiliza webpack como compilador y empaquetador del código, no es necesario saber nada de él para este taller).
Recuerda tener instalado [Git](https://git-scm.com/) y [Node.js](https://nodejs.org/es/) en tú computadora.

De igual forma, si quieres conocer más  sobre TailwindCSS, anímate a ver la [documentación oficial](https://tailwindcss.com/docs/installation).

**Recuerda siempre mantenerte en el directorio en el que estás trabajando tú página. Un directorio se ve algo así: *C:\\Users\\Escritorio\\Carpeta***

### **Instala tailwind y sus dependencias:**

```console
> npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
La bandera **-D** significa que los instalará como dependecias de desarrollo de tú proyecto, es decir, que son necesarias para trabajar con este al momento de realizar alguna modificación o actualización.

### **Añade Tailwind como un plugin de PostCSS**

Crea, en tu directorio principal, el archivo `postcss.config.js` con el siguiente contenido:
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
### **Crear el archivo de configuración (necesario para la optimización)**
Crea en tu directorio principal el archivo `tailwind.config.js` con el siguiente contenido:
```javascript
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

### **Incluye tailwind en tú archivo .CSS**
¿Qué es lo que hace esto? Básicamente es como decir "Por favor importa, desde tailwind, los diseños básicos, los componentes y clases extra". En palabras simples: agregas tailwind en su completitud a tú hoja de estilos ;)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
¡Listo! Para empezar, escribe el siguiente comando para abrir un *servidor de desarrollo*:

```console
> npm start
```
Este servidor compila los archivos y recarga el navegador automáticamente, solo es necesario guardar el archivo en tú editor de código.

----------
## **Optimización y despliegue**

### **Actualizar el archivo `tailwind.config.js`**
*Atención: Esto solo debes hacerlo cuando ya estes a punto de subirlo a tú página de GitHub* 

Agrega esto dentro del archivo:

```javascript
// tailwind.config.js
  module.exports = {
   purge: [
     './*.html',
     './src/*.js',
   ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }
```
Lo que hará será buscar en todos los archivos con terminación `.html` dentro del directorio raíz y todos los archivos con terminación `.js ` dentro de la carpeta src, clases que se utilizaron y descartará aquellas que no, esto se traduce a mucho menor peso de la hoja de estilos y por lo tanto, menor tiempo de carga para la página. 

### Despliegue

Una vez configurado lo anterior, solo necesitas correr los siguientes comandos en la terminal:
```console
> npm run build
> git add .
> git commit -m "Mensaje del commit (Este mensaje es personal)"
> git push origin main
```
Lo anterior se encarga de comprimir y generar el código para distribución y lo almacena en una carpeta llamada "dist". Después, guardas los cambios con git y los envías a tú repositorio de GitHub a traves de `git push origin main`.

Y eso ha sido todo!! Espero te resulte útil ese repo y si notaste alguna falla o consideras que se puede agregar algo, has un fork, actualiza lo necesario y has un pull request :D

Hecho con <3 por @Alfonso-AmayaC