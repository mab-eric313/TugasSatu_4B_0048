const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTasks");
const daftarProgress = document.getElementById("listInProgress");

btnTambah.addEventListener("click", function() {
	if (inputValue.value === "") {
		alert("Input tidak boleh kosong");
		return;
	}

	const listBaru = document.createElement("li");
	const span = document.createElement("span");
	span.innerHTML = inputValue.value;

	listBaru.appendChild(span);
	daftarTugas.appendChild(listBaru);

	inputValue.value = "";
	inputValue.focus();
});
