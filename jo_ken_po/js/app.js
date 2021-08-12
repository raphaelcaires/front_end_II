let situacao = confirm("Escolha sua jogada");

if(situacao) {
  // redireciona o usuário para a página de acesso permitido.
  window.location.href="acessoPermitido.html";
} else {
  // redireciona o usuário para a página de acesso negado.
  window.location.href="acessoNegado.html";
}