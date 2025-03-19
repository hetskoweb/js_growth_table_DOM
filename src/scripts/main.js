'use strict';

// write code here
const field = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

appendRowButton.addEventListener('click', () => {
  const tbody = field.querySelector('tbody');
  const rows = tbody.querySelectorAll('tr');
  const newRow = document.createElement('tr');

  for (let i = 1; i <= 4; i++) {
    const cell = document.createElement('td');

    newRow.appendChild(cell);
  }

  if (rows.length < 10) {
    tbody.appendChild(newRow);
  }

  const updatedRows = tbody.querySelectorAll('tr');

  if (updatedRows.length >= 10) {
    appendRowButton.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', () => {
  const tbody = field.querySelector('tbody');
  const rows = tbody.querySelectorAll('tr');

  if (rows.length > 2) {
    const firstRow = rows[0];

    firstRow.remove();
  }

  const updatedRows = tbody.querySelectorAll('tr');

  if (updatedRows.length <= 2) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }
});
