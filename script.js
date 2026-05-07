const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTasks");
const daftarProgress = document.getElementById("listInProgress");
const daftarDone = document.getElementById("listDone");

btnTambah.addEventListener("click", function() {
	if (inputValue.value === "") {
		alert("Input tidak boleh kosong");
		return;
	}

	const listBaru = document.createElement("li");
	const span = document.createElement("span");
	const newDiv = document.createElement("div");
	const newButton = document.createElement("button")
	span.innerHTML = inputValue.value;
	newButton.innerHTML = "✔️";

	newDiv.appendChild(newButton);
	newDiv.appendChild(span)

	listBaru.appendChild(newDiv);
	daftarTugas.appendChild(listBaru);

	inputValue.value = "";
	inputValue.focus();
});
