function handleFile() {
    const input = document.getElementById('csvFile');
    const file = input.files[0];

    if (file) {
        Papa.parse(file, {
            complete: function(results) {
                displayPreview(results.data);
            }
        });
    }
}

function displayPreview(data) {
    const previewDiv = document.getElementById('preview');
    previewDiv.innerHTML = '';

    const table = document.createElement('table');
    table.border = '1';

    // Agregar encabezados de columna
    const headerRow = table.insertRow();
    console.log(data[0]);
    for (const column of data[0]) {
        console.log(column);
        const cell = headerRow.insertCell();
        cell.textContent = column;
    }

    // Agregar filas de datos
    for (let i = 1; i < data.length; i++) {
        const row = table.insertRow();
        for (const value of data[i]) {
            const cell = row.insertCell();
            cell.textContent = value;
        }
    }

    previewDiv.appendChild(table);

    // Agregar botón para descargar ICS
    const downloadButton = document.createElement('button');
    downloadButton.textContent = 'Download ICS';
    downloadButton.onclick = function() {
        generateICSFile(data);
    };
    previewDiv.appendChild(downloadButton);
}

function generateICSFile(data) {
    // Aquí debes implementar la lógica de generación del archivo ICS
    // Puedes utilizar la lógica previamente proporcionada y adaptarla al entorno web
    // Después, puedes usar FileSaver.js para descargar el archivo
    console.log('Generar archivo ICS aquí');
}