<?php

$nome = $_POST["nome"];
$email = $_POST["email"];
$senha = $_POST["senha"];

$conn = mysqli_connect("localhost:3306", "root", "", "phpdb");

if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

$usuario_existente = mysqli_num_rows(mysqli_query($conn, "SELECT * FROM usuarios 
    WHERE email = '$email';"));

if ($usuario_existente > 0) {
  $error = new stdClass;
  $error->erro = true;
  $error->mensagem = 'Usuário com mesmo email já cadastrado';
  echo json_encode($error);
  return;
}

mysqli_query($conn, "INSERT INTO usuarios (nome, email, senha) 
    VALUES ('$nome', '$email', '$senha')");

echo json_encode("Sucesso!");
