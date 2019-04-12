<template lang="pug">
  #registro
    img(src="./assets/platzi.jpg")
    h1 {{ title }}
    label Nombre
    input(
      name='nombre'
      placeholder='Platzerito'
    )
    label Apellido
    input(
      name='apellido'
      placeholder='Cool de la web'
    )
    label Cargo
    input(
      name='cargo'
      placeholder='Fullstack Js'
    )
    a(class='button' href='google.com') Enviar
</template>
<script>
export default {
  name: 'registro',
  data () {
    return {
      title: 'Registro stación Platzi'
    }
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Roboto');
:root {
  --azul-cielo :#00bfd6;
  --dorado :#ff9300 ;
  --fondo : #f7f7f7;
  --blanco-registro: #ffffff;
  --con-width: 320px;
  --con-heigth: 409px;
  /* color: var(--my-color) */
}
body{
  display: flex;
  justify-content: center;
  background-color: var(--fondo);
  font-family: 'Roboto bold', sans-serif;
}
#registro {
  /* border: 1px solid red; */
  width: var(--con-width);
  height: var(--con-heigth);
  margin: 1em;
  padding: 1.3em;
  background-color: var(--blanco-registro);
  border-radius: 0.4em;
}
img {
  max-width: 100%;
}
h1 {
  color: var(--azul-cielo);
  margin: .3em 0;
  font-size: 1.5em;
}
label {
  color: var(--dorado);
  margin: .2em .1em;
}

input {
  border: 0;
  border-bottom: 1px solid var(--dorado);
  margin: .2em 0;
  padding: .3em 0;
  outline: none;
  max-width: 100%;
  width:100%;
}
a.button {
  display: flex;
  justify-content: space-around;
  color: var(--blanco-registro);
  background-color: var(--azul-cielo);
  text-decoration: none;
  padding: .2em;
}
</style>
