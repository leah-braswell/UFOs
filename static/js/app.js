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

//add a function to handle a button click
function handleClick() {
    //grab the datetime value from the filter
    let date = d3.select("#datetime").property('value');
    let filteredData = tableData;

    //Check to see fi a date was entered and filter the data using that date.
    if (date) {
        //apply 'filter' to the table data to only keep the rows
        //where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //Rebuild the table using the filtered data
    //@NOTE:  if not date was entered, then filteredData will
    //just be the original tableData
    buildTable(filteredData);
}

//Listen for a button click
d3.selectall("filter-btn").on("click", handleClick);

//make sure table loads as soon as the page does
//call the buildTable function to create the original table
buildTable(tableData);
