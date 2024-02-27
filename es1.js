const usrTxt = document.getElementById("userName");

const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");

const displayUsr = function () {
  if (localStorage.getItem("userName")) {
    msg = "Benvenuto, " + localStorage.getItem("userName");
  } else {
    msg = "Benvenuto utente sconosciuto, per favore inserisci il tuo nome qui sotto.";
  }
  document.getElementById("wlcMsg").innerHTML = msg;
};

const save = (e) => {
  e.preventDefault();

  const userName = document.getElementById("userName").value;
  localStorage.setItem("userName", userName);
  displayUsr();

  userName.value = "";
};

const deleteUser = function () {
  const hasConfirmed = confirm("Sei sicuro di voler cancellare i dati inseriti?");
  if (hasConfirmed) {
    usrTxt.value = "";
    localStorage.removeItem("userName");
    displayUsr();
  }
};

window.onload = displayUsr();

saveBtn.addEventListener("click", save);
resetBtn.addEventListener("click", deleteUser);
