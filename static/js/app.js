// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select('tbody');

//build a table from the data file
function buildTable(data) {
    //clear any existing data
    tbody.html("");


    //create a forEach function to loop through the array 'data'
    data.forEach((dataRow) => {
        //find the tbody tag and add a table row
        let row = tbody.append('tr');
        //reference one object from the array, put the values into dataRow, one object per row
        Object.values(dataRow).forEach((val) => {
            //append data into a <td> tag
            let cell = row.append('td');
            //extract only the text of the value from the key:value pair
            cell.text(val);
            }
        );
    });
}