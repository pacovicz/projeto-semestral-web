<?php

$conn = mysqli_connect("localhost:3306", "root", "", "phpdb");

if ($conn->connect_error) {
  echo json_encode ("Conexão falhou: " . $conn->connect_error); 
  return;
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
