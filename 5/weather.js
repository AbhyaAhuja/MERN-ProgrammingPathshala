document.getElementById("head").innerText= "Weather Deets"
function fetchAPI() {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=5RH7NLBSXK9ENUGU43LPLD6YX")
        .then((res) => res.json())
        .then((data) => renderUI(data));
}

fetchAPI();
const root = document.getElementById('root')
function renderUI(data) {
    const days = data.days;
    console.log(days)

    const row = document.createElement('tr')
    const cell1 = document.createElement('th');
    cell1.innerText = 'Date';
    row.appendChild(cell1)

    const cell2 = document.createElement('th');
    cell2.innerText = 'Maximum temperature';
    row.appendChild(cell2)
    root.appendChild(row)

    const cell3 = document.createElement('th');
    cell3.innerText = 'Minimum temperature';
    row.appendChild(cell3)

    root.appendChild(row)
// ______________________________________________________
    // const childrow = document.createElement('tr');
    // const c1 = document.createElement('td')
    // c1.innerText = '80 F'
    // childrow.appendChild(c1);

    // const c2 = document.createElement('td')
    // c2.innerText = '90 F'
    // childrow.appendChild(c2);

    // const c3 = document.createElement('td')
    // c3.innerText = '910 F'
    // childrow.appendChild(c3);
    // root.appendChild(childrow)
    // ________________________________________

    for(let i=0;i<days.length;i++){
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');

    cell1.innerText= days[i].datetime
    cell2.innerText= days[i].tempmax
    cell3.innerText= days[i].tempmin

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    root.appendChild(row);


     }

}
//make child rows

// res always in string hence we convert it into json object with .json()

// renderUI();
