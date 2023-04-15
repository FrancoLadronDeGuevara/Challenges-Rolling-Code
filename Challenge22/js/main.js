//Un hospital quiere que le hagamos una aplicación inteligente donde
//el paciente ponga sus datos, su dolencia y se determine que tipo de
//estudio debe realizarse. Ej: Dolencia: Dolor abdominal
//A tener en cuenta: A las mujeres embarazadas no se les puede hacer
//una tomografía porque puede tener efectos teratogénicos

let indicarDolencia;

alert("Para continuar debe ingresar sus datos");

let nombre = prompt("Nombre y/o Apellido:");
while (nombre == "" || !isNaN(nombre)) {
  nombre = prompt("Ingresa un nombre o apellido válido!");
}

let edad = parseInt(prompt("Edad"));
while (edad < 0 || edad > 100 || isNaN(edad)) {
  edad = parseInt(
    prompt("Ups, parece que ingresaste mal tu edad. Intentá de nuevo")
  );
}
if (edad >= 18) {
  let genero = prompt(
    "Masculino          M\nFemenino           F"
  ).toLowerCase();
  while ((genero != "m" && genero != "f") || !isNaN(genero)) {
    genero = prompt("Recordá:\n M => MASCULINO\n F => FEMENINO").toLowerCase();
  }
  if (genero == "f") {
    let embarazada = prompt("¿Estas embarazada? SI/NO").toUpperCase();
    while ((embarazada != "SI" && embarazada != "NO") || !isNaN(embarazada)) {
      embarazada = prompt(
        "Respuesta inválida. Intentá nuevamente\n¿Estas embarazada? SI/NO"
      ).toUpperCase();
    }
    if (embarazada == "SI") {
      alert(
        "No puedes realizarte ningun estudio ya que hacerte una\ntomografía puede tener efectos teratogénicos!"
      );
    } else {
      dolencia();
    }
  } else {
    dolencia();
  }
} else {
  let acompaniadoDePadres = prompt(
    "¿Estás acompañado de tus padres? SI/NO"
  ).toUpperCase();
  while (
    (acompaniadoDePadres != "SI" && acompaniadoDePadres != "NO") ||
    !isNaN(acompaniadoDePadres)
  ) {
    acompaniadoDePadres = prompt(
      "Respuesta inválida. Intentá nuevamente\n¿Estás acompañado de tus padres? SI/NO"
    ).toUpperCase();
  }
  if (acompaniadoDePadres == "SI") {
    dolencia();
  } else {
    alert(
      "No puedes usar esta app si no estas acompañado de una persona mayor de edad"
    );
  }
}

function dolencia() {
  alert("Por favor, indique que dolencia tiene");
  indicarDolencia = parseInt(
    prompt(
      "1-Dolores de cabeza" +
        "\n2-Dolores abdominales" +
        "\n3-Dolores de garganta" +
        "\n4-Dolores musculares" +
        "\n5-Dolores cervicales"
    )
  );
  while (indicarDolencia < 1 || indicarDolencia > 6 || isNaN(indicarDolencia)) {
    alert("Parece que ingresaste una opción inválida. Intentá nuevamente!");
    indicarDolencia = parseInt(
      prompt(
        "1-Dolores de cabeza" +
          "\n2-Dolores abdominales" +
          "\n3-Dolores de garganta" +
          "\n4-Dolores musculares" +
          "\n5-Dolores cervicales"
      )
    );
  }
}

switch (indicarDolencia) {
  case 1:
    alert(
      "Deberá realizarse una tomografía computarizada o una resonancia magnética"
    );
    break;
  case 2:
    alert(
      "Deberá realizarse una ecografía, una tomografía computarizada del abdomen o una resonancia magnética"
    );
    break;
  case 3:
    alert("Deberá recurrir al otorrino por una prueba de Hisopo Faríngeo");
    break;
  case 4:
    alert("Deberá realizarse una electromiografía");
    break;
  case 5:
    alert(
      "Deberá realizarse una radiografía de cuello, una resonancia magnética o una mielografía por TC"
    );
    break;
  default:
    alert("Deberá recurrir a su medico clinico!");
    break;
}
