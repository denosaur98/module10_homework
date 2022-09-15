const url = 'wss://echo-ws-service.herokuapp.com';
const output = document.querySelector('.output');
const input = document.querySelector('.input');
const btn = document.querySelector('.send');
const bntGeo = document.querySelector('.geo');
function pageLoaded() {
    let socket = new WebSocket(url);
    socket.onopen = () => {
        alert('Соединение установлено');
    }
    socket.onmessage = (e) => {
        writeToChat(e.data, true);
    }
	socket.onclose = function (e) {
		alert('Отключен')
	}
    btn.addEventListener('click', sendMessage);
    function sendMessage () {
        if(!input.value) return;
        socket.send(input.value);
        writeToChat(input.value, false);
        input.value === '';
    }
    function writeToChat(message, isRecieved) {
        let messageHTML = `<div class="${isRecieved ? "recieved" : "sent"}">${message}</div>`;
        output.innerHTML += messageHTML;
    }
}

bntGeo.addEventListener("click", getLocation);
function getLocation() {
  if ("geolocation" in navigator) {
	let locationOptions = {
	  enableHighAccuracy: true
	};
	navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
  } else {
	writeOutput("Ваш браузер не поддерживает функцию определения местоположения");
  }
}
function locationSuccess(data) {
  let link = `https://www.openstreetmap.org/#map=19/${data.coords.latitude}/${data.coords.longitude}`;
  writeOutput(`<a href="${link}" class="link" target="_blank">Вы находитесь здесь</a>`);
}
function locationError() {
  writeOutput("При получении местоположения произошла ошибка");
}
function writeOutput(message) {
  output.innerHTML = `<p class="recieved">${message}</p>`;
}
document.addEventListener('DOMContentLoaded', pageLoaded);
