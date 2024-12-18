/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generarCarta(); // Generar la primera carta
  ajustarTamaño();

  // Evento para ajustar tamaño cuando se cambian los inputs
  document.getElementById("width").addEventListener("input", ajustarTamaño);
  document.getElementById("height").addEventListener("input", ajustarTamaño);

  // Botón para generar una nueva carta
  document.getElementById("generarCartaBtn").onclick = generarCarta;

  // Temporizador que genera una nueva carta cada 10 segundos
  setInterval(generarCarta, 10000);
};

function generarCarta() {
  const palos = ["spade", "club", "heart", "diamond"];
  const simbolos = ["♠", "♣", "♥", "♦"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const numeroAleatorio = Math.floor(Math.random() * 13);
  const paloAleatorio = Math.floor(Math.random() * 4);

  const carta = document.getElementById("carta");

  carta.className = "card"; // Reiniciar clases
  carta.classList.add(palos[paloAleatorio]);

  carta.innerHTML = `
    <div class="top">${simbolos[paloAleatorio]}</div>
    <div class="center">${numeros[numeroAleatorio]}</div>
    <div class="bottom">${simbolos[paloAleatorio]}</div>
  `;
}

// Función para ajustar el tamaño de la carta
function ajustarTamaño() {
  const width = document.getElementById("width").value || 150;
  const height = document.getElementById("height").value || 220;

  const carta = document.getElementById("carta");
  carta.style.width = `${width}px`;
  carta.style.height = `${height}px`;
}
