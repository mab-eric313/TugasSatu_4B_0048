// TODO: (eventListener()) sesuaikan nama-nama variabel/parameter
// TODO: (eventListener()) optimalkan penggunaan parameter yang berlebih dengan objects
function eventListener(listBaruDone, spanDone, newDivDone, newButtonProgress, newButtonDeleteDone, newButtonEditDone, inputValue, spanTask, daftarDone, btnTambah, divFormTodo, listBaruProgress, newDivProgress) {
	if (inputValue === null) {
		spanDone.innerHTML = spanTask.innerHTML;
		newButtonDeleteDone.innerHTML = "✖️";
	} else {
		spanDone.innerHTML = inputValue.value;
		newButtonDeleteDone.innerHTML = "✖️";
	}

	if (newButtonProgress !== null) {
		newButtonProgress.innerHTML = "✔️";
		newDivDone.appendChild(newButtonProgress)
	}

	newButtonEditDone.innerHTML = "✏️";

	newDivDone.appendChild(newButtonDeleteDone);
	newDivDone.appendChild(newButtonEditDone)
	newDivDone.appendChild(spanDone)

	listBaruDone.appendChild(newDivDone);
	daftarDone.appendChild(listBaruDone);

	if (listBaruProgress !== null && newDivProgress !== null)
		listBaruProgress.removeChild(newDivProgress);

	newButtonDeleteDone.addEventListener("click", function() {
		listBaruDone.removeChild(newDivDone);
	});

	newButtonEditDone.addEventListener("click", function() {
		inputValue.value = spanDone.innerHTML;
		btnTambah.remove()

		const btnEdit = document.createElement("button");
		btnEdit.innerHTML = "Edit";
		divFormTodo.appendChild(btnEdit);

		btnEdit.addEventListener("click", function() {
			spanDone.innerHTML = inputValue.value;
			btnEdit.remove()
			inputValue.value = "";

			divFormTodo.appendChild(btnTambah);
		});
	});
}

const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTasks");
const daftarProgress = document.getElementById("listInProgress");
const daftarDone = document.getElementById("listDone");
const divFormTodo = document.getElementById("formTodo");

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
	const newButtonEditTask = document.createElement("button")
	
	eventListener(listBaruTask, spanTask, newDivTask, newButtonTask, newButtonDeleteTask, newButtonEditTask, inputValue, null, daftarTugas, btnTambah, divFormTodo, null, null);

	inputValue.value = "";
	inputValue.focus();
	
	newButtonTask.addEventListener("click", function() {
		const listBaruProgress = document.createElement("li");
		const spanProgress = document.createElement("span");
		const newDivProgress = document.createElement("div");
		const newButtonProgress = document.createElement("button")
		const newButtonDeleteProgress = document.createElement("button")
		const newButtonEditProgress = document.createElement("button")

		eventListener(listBaruProgress, spanProgress, newDivProgress, newButtonProgress, newButtonDeleteProgress, newButtonEditProgress, null, spanTask, daftarProgress, btnTambah, divFormTodo, listBaruTask, newDivTask);

		newButtonProgress.addEventListener("click", function() {
			const listBaruDone = document.createElement("li");
			const spanDone = document.createElement("span");
			const newDivDone = document.createElement("div");
			const newButtonDeleteDone = document.createElement("button")
			const newButtonEditDone = document.createElement("button")

			eventListener(listBaruDone, spanDone, newDivDone, null, newButtonDeleteDone, newButtonEditDone, null, spanTask, daftarDone, btnTambah, divFormTodo, listBaruProgress, newDivProgress);
		});
	});
});
