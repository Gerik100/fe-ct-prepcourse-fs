const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var prop = Object.keys(objeto);
  return prop.length;
};

module.exports = contarPropiedades;
