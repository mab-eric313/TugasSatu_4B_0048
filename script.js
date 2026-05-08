// TODO: LOW (eventListener()) inputTask dan inputDate harus kosong setelah input 
// 		 task
// TODO: MEDIUM (eventListener()) ketika user meng-click edit kemudian hapus, tidak 
// 		 sinkron dengan inputTask, inputDate, btnTambahTodo
// TODO: HIGH (eventListener() & eventObject) sesuaikan nama-nama variabel/parameter
// 		 objects
function eventListener(eventObject) {
	if (eventObject.inputValue === null) {
		eventObject.spanDone.innerHTML = eventObject.spanTask.innerHTML;
		eventObject.newButtonDeleteDone.innerHTML = "✖️";
	} else {
		eventObject.spanDone.innerHTML = eventObject.inputValue.value;
		eventObject.newButtonDeleteDone.innerHTML = "✖️";
	}

	if (eventObject.newButtonProgress !== null) {
		eventObject.newButtonProgress.innerHTML = "✔️";
		eventObject.newDivDone.appendChild(eventObject.newButtonProgress)
	}

	eventObject.newButtonEditDone.innerHTML = "✏️";
	eventObject.spanDateDone.innerHTML = eventObject.inputDate.value;

	eventObject.newDivDone.appendChild(eventObject.newButtonDeleteDone);
	eventObject.newDivDone.appendChild(eventObject.newButtonEditDone)
	eventObject.newDivDone.appendChild(eventObject.spanDone)
	eventObject.newDivDone.appendChild(eventObject.spanDateDone)

	eventObject.listBaruDone.appendChild(eventObject.newDivDone);
	eventObject.daftarDone.appendChild(eventObject.listBaruDone);

	if (eventObject.listBaruProgress !== null && eventObject.newDivProgress !== null)
		eventObject.listBaruProgress.removeChild(eventObject.newDivProgress);

	eventObject.newButtonDeleteDone.addEventListener("click", function() {
		eventObject.listBaruDone.removeChild(eventObject.newDivDone);
	});

	eventObject.newButtonEditDone.addEventListener("click", function() {
		eventObject.inputValue.value = eventObject.spanDone.innerHTML;
		eventObject.inputDate.value = eventObject.spanDateDone.innerHTML;
		eventObject.btnTambah.remove()

		const btnEdit = document.createElement("button");
		btnEdit.innerHTML = "Edit";
		eventObject.divFormTodo.appendChild(btnEdit);

		btnEdit.addEventListener("click", function() {
			eventObject.spanDone.innerHTML = eventObject.inputValue.value;
			eventObject.spanDateDone.innerHTML = eventObject.inputDate.value;
			btnEdit.remove()

			eventObject.divFormTodo.appendChild(eventObject.btnTambah);
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

let eventObject = {
	listBaruDone: document.createElement("li"), 
	spanDone: document.createElement("span"), 
	spanDateDone: document.createElement("span"), 
	newDivDone: document.createElement("div"), 
	newButtonProgress: document.createElement("button"), 
	newButtonDeleteDone: document.createElement("button"), 
	newButtonEditDone: document.createElement("button"), 
	inputValue: document.getElementById("inputTask"), 
	inputDate: document.getElementById("inputDate"), 
	spanTask: null, 
	daftarDone: document.getElementById("listDone"), 
	btnTambah: document.getElementById("btnTambahTodo"), 
	divFormTodo: document.getElementById("formTodo"), 
	listBaruProgress: null,
	newDivProgress: null,
}

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

	eventListener(
		eventObject = {
			listBaruDone: listBaruTask, 
			spanDone: spanTask, 
			spanDateDone: spanDateTask, 
			newDivDone: newDivTask, 
			newButtonProgress: newButtonTask, 
			newButtonDeleteDone: newButtonDeleteTask, 
			newButtonEditDone: newButtonEditTask, 
			inputValue: inputValue, 
			inputDate: inputDate, 
			spanTask: null, 
			daftarDone: daftarTugas, 
			btnTambah: btnTambah, 
			divFormTodo: divFormTodo, 
			listBaruProgress: null,
			newDivProgress: null,
		}
	);
	
	// eventListener(
	// 	listBaruTask, spanTask, spanDateTask, newDivTask, newButtonTask, 
	// 	newButtonDeleteTask, newButtonEditTask, inputValue, inputDate, null, 
	// 	daftarTugas, btnTambah, divFormTodo, null, null
	// );

	inputValue.focus();
	
	newButtonTask.addEventListener("click", function() {
		const listBaruProgress = document.createElement("li");
		const spanProgress = document.createElement("span");
		const spanDateProgress = document.createElement("span");
		const newDivProgress = document.createElement("div");
		const newButtonProgress = document.createElement("button")
		const newButtonDeleteProgress = document.createElement("button")
		const newButtonEditProgress = document.createElement("button")

		eventListener(
			eventObject = {
				listBaruDone: listBaruProgress, 
				spanDone: spanProgress, 
				spanDateDone: spanDateProgress, 
				newDivDone: newDivProgress, 
				newButtonProgress: newButtonProgress, 
				newButtonDeleteDone: newButtonDeleteProgress, 
				newButtonEditDone: newButtonEditProgress, 
				inputValue: inputValue, 
				inputDate: inputDate, 
				spanTask: spanTask, 
				daftarDone: daftarProgress, 
				btnTambah: btnTambah, 
				divFormTodo: divFormTodo, 
				listBaruProgress: listBaruTask,
				newDivProgress: newDivTask,
			}
		);

		// eventListener(
		// 	listBaruProgress, spanProgress, spanDateProgress, newDivProgress, 
		// 	newButtonProgress, newButtonDeleteProgress, newButtonEditProgress, 
		// 	inputValue, inputDate, spanTask, daftarProgress, btnTambah, divFormTodo,
		// 	listBaruTask, newDivTask
		// );


		newButtonProgress.addEventListener("click", function() {
			const listBaruDone = document.createElement("li");
			const spanDone = document.createElement("span");
			const spanDateDone = document.createElement("span");
			const newDivDone = document.createElement("div");
			const newButtonDeleteDone = document.createElement("button")
			const newButtonEditDone = document.createElement("button")

			eventListener(
				eventObject = {
					listBaruDone: listBaruDone, 
					spanDone: spanDone, 
					spanDateDone: spanDateDone, 
					newDivDone: newDivDone, 
					newButtonProgress: null, 
					newButtonDeleteDone: newButtonDeleteDone, 
					newButtonEditDone: newButtonEditDone, 
					inputValue: inputValue, 
					inputDate: inputDate, 
					spanTask: spanTask, 
					daftarDone: daftarDone, 
					btnTambah: btnTambah, 
					divFormTodo: divFormTodo, 
					listBaruProgress: listBaruProgress,
					newDivProgress: newDivProgress,
				}
			);

			// eventListener(
			// 	listBaruDone, spanDone, spanDateDone, newDivDone, null, 
			// 	newButtonDeleteDone, newButtonEditDone, inputValue, inputDate, 
			// 	spanTask, daftarDone, btnTambah, divFormTodo, listBaruProgress, 
			// 	newDivProgress
			// );
		});
	});
});
