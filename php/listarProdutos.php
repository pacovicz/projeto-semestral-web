<?php

$conn = mysqli_connect("localhost:8080", "root", "root", "phpdb");

if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

$result = mysqli_query($conn, "
  SELECT * FROM produtos
", MYSQLI_USE_RESULT);

$i = 0;
while ($dados = mysqli_fetch_assoc($result)) {
  $retorno[$i]["id"] = $dados["id"];
  $retorno[$i]["nome"] = $dados["nome"];
  $retorno[$i]["imagem"] = $dados["imagem"];

  $i++;
}

echo json_encode($retorno);
