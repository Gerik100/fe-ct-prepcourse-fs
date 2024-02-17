// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado  = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };

module.exports = objetoAnidado;
