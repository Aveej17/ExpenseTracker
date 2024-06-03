  
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const expenseDetails = {
      amount: event.target.amount.value,
      category: event.target.category.value,
      description: event.target.description.value,
    };
  
    // Save the expense details in local storage
    localStorage.setItem(expenseDetails.description, JSON.stringify(expenseDetails));
  
    // Add the new expense details to the list
    addExpenseToList(expenseDetails);
  
    // Clear the form fields
    event.target.amount.value = "";
    // event.target.category.value = "";
    event.target.description.value = "";
  }
  
  function addExpenseToList(expenseDetails) {
    const listItem = document.createElement('li');
    listItem.textContent = `${expenseDetails.amount} - ${expenseDetails.category} - ${expenseDetails.description}`;
  
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Expense';
    deleteButton.className = 'btn btn-danger btn-sm ms-2';
    deleteButton.addEventListener('click', () => {
      deleteExpense(expenseDetails.description, listItem);
    });
    listItem.appendChild(deleteButton);
  
    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Expense';
    editButton.className = 'btn btn-primary btn-sm ms-2';
    editButton.addEventListener('click', () => {
      editExpense(expenseDetails.description, listItem);
    });
    listItem.appendChild(editButton);
  
    const ul = document.querySelector('ul');
    ul.appendChild(listItem);
  }
  
  function editExpense(description, listItem) {
    // Retrieve the expense details from local storage
    const expenseDetailsString = localStorage.getItem(description);
    if (expenseDetailsString) {
      const expenseDetails = JSON.parse(expenseDetailsString);
  
      // Populate the form fields with the expense details
      document.getElementById('amount').value = expenseDetails.amount;
      document.getElementById('description').value = expenseDetails.description;
      document.getElementById('category').value = expenseDetails.category;
  
      // Remove the expense details from local storage
      localStorage.removeItem(description);
  
      // Remove the list item from the DOM
      const ul = document.querySelector('ul');
      ul.removeChild(listItem);
    }
  }
  
  function deleteExpense(description, listItem) {
    // Remove the expense details from local storage
    localStorage.removeItem(description);
  
    // Remove the list item from the DOM
    const ul = document.querySelector('ul');
    ul.removeChild(listItem);
  }


  // function handleFormSubmit(event) {
//     event.preventDefault();

//     const expenseDetails = {
//         amount: event.target.amount.value,
//         category: event.target.category.value,
//         description: event.target.description.value,
//     };

//     // Save the user details in local storage
//     localStorage.setItem(expenseDetails.description, JSON.stringify(expenseDetails));

//     // Add the new user details to the list
//     addExpenseToList(expenseDetails);

//     event.target.amount.value=""
//     event.target.description.value=""
//   }


  

// function addExpenseToList(expenseDetails) {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${expenseDetails.amount} - ${expenseDetails.category} - ${expenseDetails.description}`;

//     // Create delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete Expense';
//     deleteButton.id = expenseDetails.description;
//     deleteButton.addEventListener('click', () => {
//       deleteExpense(expenseDetails.description, listItem);
//     });
//     const ul = document.getElementsByTagName('ul')[0];
//     listItem.appendChild(deleteButton);
//     ul.appendChild(listItem);

//     // Create Edit Button
//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit Expense';
//     editButton.id = expenseDetails.description;
//     editButton.addEventListener('click', () => {
//         editExpense(expenseDetails.description, listItem);
//     });
    
//     listItem.appendChild(editButton);
//     ul.appendChild(listItem);
// };


// function editExpense(description, listItem) {
//     // Remove the user details from local storage
//     const expenseDetailsString = localStorage.getItem(description);
//       const expenseDetails = JSON.parse(expenseDetailsString);
//       console.log(expenseDetails);

//       document.getElementById("amount").value =expenseDetails.amount;
//       document.getElementById("description").value =expenseDetails.description;
//       document.getElementById("catogory").value = expenseDetails.category;


//       localStorage.removeItem(description);

//       // Remove the list item from the DOM
//       const ul = document.getElementsByTagName('ul')[0];
//       ul.removeChild(listItem);

//     }
//   ;


//   function deleteExpense(description, listItem) {
//     // Remove the user details from local storage
//     localStorage.removeItem(description);

//     // Remove the list item from the DOM
//     const ul = document.getElementsByTagName('ul')[0];
//     ul.removeChild(listItem);
//   }
// ;

  