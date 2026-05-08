// TODO: LOW (eventListener()) inputTask dan inputDate harus kosong setelah input 
// 		 task
// TODO: MEDIUM (eventListener() & eventObject) sesuaikan nama-nama variabel/parameter
// 		 objects
// TODO: HIGH (eventListener()) ketika user meng-click edit kemudian hapus, tidak 
// 		 sinkron dengan inputTask, inputDate, btnTambahTodo

function eventListener(obj) {
	if (obj.inputValue === null) {
		obj.spanDone.innerHTML = obj.spanTask.innerHTML;
		obj.newButtonDeleteDone.innerHTML = "✖️";
	} else {
		obj.spanDone.innerHTML = obj.inputValue.value;
		obj.newButtonDeleteDone.innerHTML = "✖️";
	}

	if (obj.newButtonProgress !== null) {
		obj.newButtonProgress.innerHTML = "✔️";
		obj.newDivDone.appendChild(obj.newButtonProgress)
	}

	obj.newButtonEditDone.innerHTML = "✏️";
	obj.spanDateDone.innerHTML = obj.inputDate.value;

	obj.newDivDone.appendChild(obj.newButtonDeleteDone);
	obj.newDivDone.appendChild(obj.newButtonEditDone)
	obj.newDivDone.appendChild(obj.spanDone)
	obj.newDivDone.appendChild(obj.spanDateDone)

	obj.listBaruDone.appendChild(obj.newDivDone);
	obj.daftarDone.appendChild(obj.listBaruDone);

	if (obj.listBaruProgress !== null && obj.newDivProgress !== null)
		obj.listBaruProgress.removeChild(obj.newDivProgress);

	obj.newButtonDeleteDone.addEventListener("click", function() {
		obj.listBaruDone.removeChild(obj.newDivDone);
	});

	obj.newButtonEditDone.addEventListener("click", function() {
		obj.inputValue.value = obj.spanDone.innerHTML;
		obj.inputDate.value = obj.spanDateDone.innerHTML;
		obj.btnTambah.remove()

		const btnEdit = document.createElement("button");
		btnEdit.innerHTML = "Edit";
		obj.divFormTodo.appendChild(btnEdit);

		btnEdit.addEventListener("click", function() {
			obj.spanDone.innerHTML = obj.inputValue.value;
			obj.spanDateDone.innerHTML = obj.inputDate.value;
			btnEdit.remove()

			obj.divFormTodo.appendChild(obj.btnTambah);
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

	eventListener({
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

	inputValue.focus();
	
	newButtonTask.addEventListener("click", function() {
		const listBaruProgress = document.createElement("li");
		const spanProgress = document.createElement("span");
		const spanDateProgress = document.createElement("span");
		const newDivProgress = document.createElement("div");
		const newButtonProgress = document.createElement("button")
		const newButtonDeleteProgress = document.createElement("button")
		const newButtonEditProgress = document.createElement("button")

		eventListener({
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

		newButtonProgress.addEventListener("click", function() {
			const listBaruDone = document.createElement("li");
			const spanDone = document.createElement("span");
			const spanDateDone = document.createElement("span");
			const newDivDone = document.createElement("div");
			const newButtonDeleteDone = document.createElement("button")
			const newButtonEditDone = document.createElement("button")

			eventListener({
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
		});
	});
});
