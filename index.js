// add expense to table and local storage
function addExpense() {
    var date = document.getElementById('date').value;
    var category = document.getElementById('category').value;
    var amount = document.getElementById('amount').value;
    var editIndex = document.getElementById('editIndex').value;
 
    if (editIndex === '') {
     var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
     expenses.push({date: date, category: category, amount: amount});
     localStorage.setItem('expenses', JSON.stringify(expenses));
     var tableBody = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
     var row = '<tr><td>' + date + '</td><td>' + category + '</td><td>' + amount + '</td><td><button type="button" class="btn btn-sm btn-primary" onclick="editForm(this.parentNode.parentNode)">Edit</button> <button type="button" class="btn btn-sm btn-danger" onclick="deleteExpense(this.parentNode.parentNode)">Delete</button></td></tr>';
     tableBody.insertAdjacentHTML('beforeend', row);
    } else {
     editExpense(editIndex, description, category, amount);
    }
 
    resetForm();
    return false;
   }