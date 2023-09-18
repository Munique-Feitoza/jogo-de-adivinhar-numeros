let resposta = Math.floor(Math.random() * 10 + 1);
let btn = document.getElementById("btnNum");
let tentativa = 0;
let texto = document.getElementById("nTentativa");

btn.onclick = () => {
  let palpite = document.getElementById("num").value;
  
  if(palpite == "" || palpite > 10 || palpite < 1) {
    texto.innerHTML = `Por favor insira um número
    de 1 até 10!!!`
  } else if(resposta == palpite) {
    texto.innerHTML = `Parabéns você acertou o número ${resposta}!
     Número de chutes: ${tentativa}`;
  } else if(resposta < palpite) {
    texto.innerHTML = `Chutou alto!
     Número de chutes: ${tentativa}`;
  } else {
    texto.innerHTML = `Chutou baixo!
     Número de chutes: ${tentativa}` 
  }
  
  tentativa++;
}
