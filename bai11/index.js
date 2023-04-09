function login() {
	const username = document.getElementById('id').value;
	const password = document.getElementById('password').value;
	
    const table = document.getElementById('form-table');
	const row = table.insertRow();
    const row2 = table.insertRow();
	
	const cell1 = row.insertCell();
	const cell2 = row.insertCell();
	row.textContent = username;
	row2.textContent = password;
}