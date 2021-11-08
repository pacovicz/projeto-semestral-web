<?php

$email = $_POST["email"];
$senha = $_POST["senha"];

$conn = mysqli_connect("localhost:8080", "root", "root", "phpdb");

if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

$result = mysqli_query($conn, "SELECT * FROM usuarios 
    WHERE email = '$email';");

if (mysqli_num_rows($result) == 0) {
  $error = new stdClass;
  $error->erro = true;
  $error->mensagem = 'Usuário não existente';
  echo json_encode($error);
  return;
}

$usuario = new stdClass;

while ($dados = mysqli_fetch_assoc($result)) {
  if ($dados["senha"] !== $senha) {
    $error = new stdClass;
    $error->erro = true;
    $error->mensagem = 'Email ou senha incorretos';
    echo json_encode($error);
    return;
  }

  $usuario->nome = $dados["nome"];
  $usuario->email = $dados["email"];
}

echo json_encode($usuario);
