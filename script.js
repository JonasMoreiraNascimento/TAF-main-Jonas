const gender = process.argv[2]; // Gênero
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições na barra
const barSeconds = process.argv[5]; // Tempo das repetições na barra
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

// Verifica se o gênero é masculino
if (gender === "male") {
  // Verifica se a altura é maior ou igual a 1.70
  if (height >= 1.70) {
    // Verifica se a quantidade de repetições na barra é maior ou igual a 6 OU o tempo é maior ou igual a 15
    if (barReps >= 6 || barSeconds >= 15) {
      // Verifica se a quantidade de abdominais é maior ou igual a 41
      if (abs >= 41) {
        // Verifica se a distância da corrida é maior ou igual a 3000 E o tempo é menor ou igual a 720
        // OU se a distância da corrida é maior ou igual a 5000 E o tempo é menor ou igual a 1200
        if ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) {
          // Verifica se a distância da natação é maior ou igual a 100 E o tempo é menor ou igual a 60
          // OU se o tempo de mergulho é menor ou igual a 30
          if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) {
            passed = true; // Todas as condições foram atendidas, portanto o teste foi aprovado
          }
        }
      }
    }
  }
}
// Verifica se o gênero é feminino
else if (gender === "female") {
  // Verifica se a altura é maior ou igual a 1.60
  if (height >= 1.60) {
    // Verifica se a quantidade de repetições na barra é maior ou igual a 5 OU o tempo é maior ou igual a 12
    if (barReps >= 5 || barSeconds >= 12) {
      // Verifica se a quantidade de abdominais é maior ou igual a 41
      if (abs >= 41) {
        // Verifica se a distância da corrida é maior ou igual a 4000 E o tempo é menor ou igual a 900
        // OU se a distância da corrida é maior ou igual a 6000 E o tempo é menor ou igual a 1320
        if ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) {
          // Verifica se a distância da natação é maior ou igual a 100 E o tempo é menor ou igual a 60
          // OU se o tempo de mergulho é menor ou igual a 30
          if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) {
            passed = true; // Todas as condições foram atendidas,o teste será aprovado
          }
        }
      }
    }
  }
}
else {
  passed = false; // Gênero inválido, o teste não foi aprovado
}

console.log(passed); // Exibe o resultado do teste