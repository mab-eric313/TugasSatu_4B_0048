// TODO: LOW (eventListener()) inputTask dan inputDate harus kosong setelah input 
// 		 task
// TODO: MEDIUM (eventListener()) ketika user meng-click edit kemudian hapus, tidak 
// 		 sinkron dengan inputTask, inputDate, btnTambahTodo
// TODO: HIGH (eventListener()) sesuaikan nama-nama variabel/parameter
// TODO: HIGH (eventListener()) optimalkan penggunaan parameter yang berlebih dengan
// 		 objects
function eventListener(listBaruDone, spanDone, spanDateDone, newDivDone, newButtonProgress, newButtonDeleteDone, newButtonEditDone, inputValue, inputDate, spanTask, daftarDone, btnTambah, divFormTodo, listBaruProgress, newDivProgress) {
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
	spanDateDone.innerHTML = inputDate.value;

	newDivDone.appendChild(newButtonDeleteDone);
	newDivDone.appendChild(newButtonEditDone)
	newDivDone.appendChild(spanDone)
	newDivDone.appendChild(spanDateDone)

	listBaruDone.appendChild(newDivDone);
	daftarDone.appendChild(listBaruDone);

	if (listBaruProgress !== null && newDivProgress !== null)
		listBaruProgress.removeChild(newDivProgress);

	newButtonDeleteDone.addEventListener("click", function() {
		listBaruDone.removeChild(newDivDone);
	});

	newButtonEditDone.addEventListener("click", function() {
		inputValue.value = spanDone.innerHTML;
		inputDate.value = spanDateDone.innerHTML;
		btnTambah.remove()

		const btnEdit = document.createElement("button");
		btnEdit.innerHTML = "Edit";
		divFormTodo.appendChild(btnEdit);

		btnEdit.addEventListener("click", function() {
			spanDone.innerHTML = inputValue.value;
			spanDateDone.innerHTML = inputDate.value;
			btnEdit.remove()

			divFormTodo.appendChild(btnTambah);
		});
	});
}

const inputValue = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
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
	const spanDateTask = document.createElement("span");
	const newDivTask = document.createElement("div");
	const newButtonTask = document.createElement("button")
	const newButtonDeleteTask = document.createElement("button")
	const newButtonEditTask = document.createElement("button")
	
	eventListener(listBaruTask, spanTask, spanDateTask, newDivTask, newButtonTask, newButtonDeleteTask, newButtonEditTask, inputValue, inputDate, null, daftarTugas, btnTambah, divFormTodo, null, null);

	inputValue.focus();
	
	newButtonTask.addEventListener("click", function() {
		const listBaruProgress = document.createElement("li");
		const spanProgress = document.createElement("span");
		const spanDateProgress = document.createElement("span");
		const newDivProgress = document.createElement("div");
		const newButtonProgress = document.createElement("button")
		const newButtonDeleteProgress = document.createElement("button")
		const newButtonEditProgress = document.createElement("button")

		eventListener(listBaruProgress, spanProgress, spanDateProgress, newDivProgress, newButtonProgress, newButtonDeleteProgress, newButtonEditProgress, inputValue, inputDate, spanTask, daftarProgress, btnTambah, divFormTodo, listBaruTask, newDivTask);

		newButtonProgress.addEventListener("click", function() {
			const listBaruDone = document.createElement("li");
			const spanDone = document.createElement("span");
			const spanDateDone = document.createElement("span");
			const newDivDone = document.createElement("div");
			const newButtonDeleteDone = document.createElement("button")
			const newButtonEditDone = document.createElement("button")

			eventListener(listBaruDone, spanDone, spanDateDone, newDivDone, null, newButtonDeleteDone, newButtonEditDone, inputValue, inputDate, spanTask, daftarDone, btnTambah, divFormTodo, listBaruProgress, newDivProgress);
		});
	});
});
