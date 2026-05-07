// TODO: (eventListener()) sesuaikan nama-nama variabel/parameter
// TODO: (eventListener()) optimalkan penggunaan parameter yang berlebih dengan objects
function eventListener(listBaruDone, spanDone, newDivDone, newButtonProgress, newButtonDeleteDone, inputValue, spanTask, daftarDone, listBaruProgress, newDivProgress) {
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

	newDivDone.appendChild(newButtonDeleteDone);
	newDivDone.appendChild(spanDone)

	listBaruDone.appendChild(newDivDone);
	daftarDone.appendChild(listBaruDone);

	if (listBaruProgress !== null && newDivProgress !== null)
		listBaruProgress.removeChild(newDivProgress);

	newButtonDeleteDone.addEventListener("click", function() {
		listBaruDone.removeChild(newDivDone);
	});
}

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
	
	eventListener(listBaruTask, spanTask, newDivTask, newButtonTask, newButtonDeleteTask, inputValue, null, daftarTugas, null, null);

	inputValue.value = "";
	inputValue.focus();
	
	newButtonTask.addEventListener("click", function() {
		const listBaruProgress = document.createElement("li");
		const spanProgress = document.createElement("span");
		const newDivProgress = document.createElement("div");
		const newButtonProgress = document.createElement("button")
		const newButtonDeleteProgress = document.createElement("button")

		eventListener(listBaruProgress, spanProgress, newDivProgress, newButtonProgress, newButtonDeleteProgress, null, spanTask, daftarProgress, listBaruTask, newDivTask);

		newButtonProgress.addEventListener("click", function() {
			const listBaruDone = document.createElement("li");
			const spanDone = document.createElement("span");
			const newDivDone = document.createElement("div");
			const newButtonDeleteDone = document.createElement("button")

			eventListener(listBaruDone, spanDone, newDivDone, null, newButtonDeleteDone, null, spanTask, daftarDone, listBaruProgress, newDivProgress);
		});
	});
});
