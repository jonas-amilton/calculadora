function selecionar(num) {
  let numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}
function limpar() {
  //ao ativar ele retorna string vazia
  document.getElementById("resultado").innerHTML = "0";
}
function apagar() {
  let resultado = document.getElementById("resultado").innerHTML;
  //substring() retorna a parte da string
  //entre os índices inicial e final, ou até o final da string.
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function calcular() {
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    //Eval avalia a cadeia de caracteres e retorna seu valor
    //Ex.: Eval("1 + 1") retorna 2.
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "0";
  }
}
