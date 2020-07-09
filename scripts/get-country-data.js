function getCountryData()  {

    // -------------- FETCH API (URL IN variables.js) --------------------

    fetch(url, {
        "method": "GET",
        "headers": {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "52ba0c8cffmshe20538ff89d3db4p1a191fjsn731f874d5861"
                    }
        })

    .then((res) => {return res.json()})
    .then((data) =>  {
        
        console.log(data);
        
        console.log(data.response);
        
////////////////////////

////////////////////////
        // -------------- GET DATA FOR FIRST 10 COUNTRIES IN API RESPONSE --------------------
            
        var i;
        for (var i = 0; i < 10; i++)  {
            let countryDataBorder = document.createElement('div');
            let countryData = document.createElement('div');
            let h2header = document.createElement('h2');
            let h4newCases = document.createElement('h4');
            let h4activeCases = document.createElement('h4');
            let h4newDeaths= document.createElement('h4');
            let h4totalDeaths = document.createElement('h4');

            h2header.textContent = data.response[i].country;
            h4newCases.textContent = "New Cases: " + data.response[i].cases.new;
            h4activeCases.textContent = "Active Cases: " + data.response[i].cases.active;
            h4newDeaths.textContent = "New Deaths: " + data.response[i].deaths.new;
            h4totalDeaths.textContent = "Total Deaths: " + data.response[i].deaths.total;

            countryDataBorder.classList = "country-data-border";
            countryData.classList = "country-data";

            document.getElementById('covid19cases').appendChild(countryDataBorder);
            countryDataBorder.appendChild(countryData);
            countryData.appendChild(h2header);
            countryData.appendChild(h4newCases);
            countryData.appendChild(h4activeCases);
            countryData.appendChild(h4newDeaths);
            countryData.appendChild(h4totalDeaths);
        }

        // -------------- POPULATE DROPDOWN LIST WITH DATA FROM EVERY NATION, CONTINENT, AND SHIP --------------------

            for (let i = 0; i < data.results; i++)  {
                let anchor = document.createElement('a');
                
                anchor.textContent = (data.response[i].country.replace(/-/g, ' '));
                
                // -------------- PASS API DATA WHEN CLICKED TO SMALL DATA WINDOW AND POPUP MODAL --------------------

                anchor.setAttribute('onclick', 'selectCountry(' + '"' + data.response[i].country + '"' + ', ' + '"' + data.response[i].cases.active + '"' + ', ' + '"' + data.response[i].cases.critical + '"' + ', ' + '"' + data.response[i].cases.new + '"' + ', ' + '"' + data.response[i].cases.recovered + '"' + ', ' + '"' + data.response[i].cases.total + '"' + ', ' + '"' + data.response[i].deaths.new + '"' + ', ' + '"' + data.response[i].deaths.total + '"' + ', ' + '"' + data.response[i].tests.total + '"' + ', ' + '"' + data.response[i].time + '"' + ')');                        
                
                document.getElementById('covid19-dropdown-countries').appendChild(anchor)                    
            }
    });


};

getCountryData();