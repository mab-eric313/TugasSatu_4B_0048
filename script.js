// TODO: buat newButtonDelete berfungsi

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
		const listBaruProgress = document.createElement("li");
		const spanProgress = document.createElement("span");
		const newDivProgress = document.createElement("div");
		const newButtonProgress = document.createElement("button")
		const newButtonDeleteProgress = document.createElement("button")

		spanProgress.innerHTML = spanTask.innerHTML;
		newButtonProgress.innerHTML = "✔️";
		newButtonDeleteProgress.innerHTML = "✖️";

		newDivProgress.appendChild(newButtonProgress);
		newDivProgress.appendChild(newButtonDeleteProgress);
		newDivProgress.appendChild(spanProgress)

		listBaruProgress.appendChild(newDivProgress);
		daftarProgress.appendChild(listBaruProgress);

		listBaruTask.removeChild(newDivTask);

		newButtonProgress.addEventListener("click", function() {
			const listBaruDone = document.createElement("li");
			const spanDone = document.createElement("span");
			const newDivDone = document.createElement("div");
			const newButtonDeleteDone = document.createElement("button")

			spanDone.innerHTML = spanTask.innerHTML;
			newButtonDeleteDone.innerHTML = "✖️";

			newDivDone.appendChild(newButtonDeleteDone);
			newDivDone.appendChild(spanDone)

			listBaruDone.appendChild(newDivDone);
			daftarDone.appendChild(listBaruDone);

			listBaruProgress.removeChild(newDivProgress);
		});
	});
});
