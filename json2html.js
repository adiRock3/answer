export default function json2html(data) {
    // Get all unique column names from all objects
    const columns = Array.from(new Set(
        data.reduce((cols, obj) => cols.concat(Object.keys(obj)), [])
    ));

    // Create table header
    const header = `
        <thead>
            <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>`;

    // Create table body
    const body = `
        <tbody>
            ${data.map(obj => `
                <tr>${columns.map(col => `<td>${obj[col] || ''}</td>`).join('')}</tr>
            `).join('')}
        </tbody>`;

    // Return complete table with data-user attribute
    return `<table data-user="jaiswalaadarsh25@gmail.com">${header}${body}</table>`;
}