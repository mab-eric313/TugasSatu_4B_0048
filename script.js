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

	const listBaruTask = document.createElement("li");
	const spanTask = document.createElement("span");
	const newDivTask = document.createElement("div");
	const newButtonTask = document.createElement("button")
	const newButtonDeleteTask = document.createElement("button")

	spanTask.innerHTML = inputValue.value;
	newButtonTask.innerHTML = "✔️";
	newButtonDeleteTask.innerHTML = "✖️";

	newDivTask.appendChild(newButtonTask);
	newDivTask.appendChild(newButtonDeleteTask);
	newDivTask.appendChild(spanTask)

	listBaruTask.appendChild(newDivTask);
	daftarTugas.appendChild(listBaruTask);

	inputValue.value = "";
	inputValue.focus();
	
	newButtonTask.addEventListener("click", function() {
		const listBaru = document.createElement("li");
		const span = document.createElement("span");
		const newDiv = document.createElement("div");
		const newButton = document.createElement("button")
		const newButtonDelete = document.createElement("button")

		span.innerHTML = spanTask.innerHTML;
		newButton.innerHTML = "✔️";
		newButtonDelete.innerHTML = "✖️";

		newDiv.appendChild(newButton);
		newDiv.appendChild(newButtonDelete);
		newDiv.appendChild(span)

		listBaru.appendChild(newDiv);
		daftarProgress.appendChild(listBaru);

		listBaruTask.removeChild(newDivTask);
	});
});
