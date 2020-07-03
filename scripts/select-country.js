function selectCountry(country, activeCases, criticalCases, newCases, recoveredCases, totalCases, newDeaths, totalDeaths, totalTests, time)  {

    // -------------- HIDE DROPDOWN LIST --------------------

    document.getElementById("covid19-dropdown-countries").classList.remove('show')
    document.getElementById("covid19-dropdown-countries").classList.add('hide')

    // -------------- TOGGLE DATA LOADER ELEMENT --------------------

    document.getElementById("loader-container").classList.toggle('hide', false)
    document.getElementById("loader-container").classList.toggle('show', true)

    // -------------- FETCH API (URL IN variables.js) --------------------

    fetch(url, {
        "method": "GET",
        "headers": {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "52ba0c8cffmshe20538ff89d3db4p1a191fjsn731f874d5861"
                    }
        })

    .then((res) => {return res.json()})
    .then((data) => {

    // -------------- CREATE ELEMENTS FOR SMALL INFO BOX --------------------

    let showCountry = document.getElementById('show-country');
    let h2header = document.createElement('h2');
        h2header.id = "h2-sc";
    let h4newCases = document.createElement('h4');
        h4newCases.id = "h4-nc";
    let h4activeCases = document.createElement('h4');
        h4activeCases.id = "h4-ac";
    let h4newDeaths= document.createElement('h4');
        h4newDeaths.id = 'h4-nd';
    let h4totalDeaths = document.createElement('h4');
        h4totalDeaths.id = 'h4-td';
    let showMoreInfoButton = document.createElement('button');
        showMoreInfoButton.id = "show-more-info-button";
        showMoreInfoButton.innerText = "Show More Info"
        showMoreInfoButton.setAttribute('onclick', 'showMoreCountryInfo()');      
        
    // -------------- CREATE ELEMENTS FOR POP UP MODAL --------------------

    let modalshowCountry = document.getElementById('morecountryinfo');
    let modalh2header = document.createElement('h2');
        modalh2header.id = "h2-sc-modal";
    let modalh4activeCases = document.createElement('h4');
        modalh4activeCases.id = "h4-ac-modal";
    let modalh4criticalCases = document.createElement('h4');
        modalh4criticalCases.id = "h4-cc-modal";
    let modalh4newCases = document.createElement('h4');
        modalh4newCases.id = "h4-nc-modal";
    let modalh4recoveredCases = document.createElement('h4');
        modalh4recoveredCases.id = "h4-rc-modal";
    let modalh4totalCases = document.createElement('h4');
        modalh4totalCases.id = "h4-tc-modal";
    let modalh4newDeaths= document.createElement('h4');
        modalh4newDeaths.id = 'h4-nd-modal';       
    let modalh4totalDeaths = document.createElement('h4');
        modalh4totalDeaths.id = 'h4-td-modal';
    let modalh4totalTests = document.createElement('h4');
        modalh4totalTests.id = 'h4-tt-modal';
    let modalh6Time = document.createElement('h6');
        modalh6Time.id = 'h6-time-modal';
    let modalCloseButton = document.createElement('button');
        modalCloseButton.id = 'modal-close-button';
        modalCloseButton.innerText = 'close X';
        modalCloseButton.setAttribute('onclick', 'closeModal()'); 

    // -------------- ADD TEXT TO NEW SMALL BOX ELEMENTS --------------------

    h2header.textContent = country.replace(/-/g, ' ');
    h4newCases.textContent = "New Cases: " + newCases.replace(null, '0');
    h4activeCases.textContent = "Active Cases: " + activeCases.replace(null, '0');
    h4newDeaths.textContent = "New Deaths: " + newDeaths.replace(null, '0');
    h4totalDeaths.textContent = "Total Deaths: " + totalDeaths.replace(null, '0');

    // -------------- ADD TEXT TO MODAL ELEMENTS --------------------

    modalh2header.textContent = country.replace(/-/g, ' ');
    modalh4newCases.textContent = "New Cases: " + newCases.replace(null, '0');
    modalh4activeCases.textContent = "Active Cases: " + activeCases.replace(null, '0');
    modalh4criticalCases.textContent = "Critical Cases: " + criticalCases.replace(null, '0');
    modalh4recoveredCases.textContent = "Recovered Cases: " + recoveredCases.replace(null, '0');
    modalh4totalCases.textContent = "Total Cases: " + totalCases.replace(null, '0');
    modalh4newDeaths.textContent = "New Deaths: " + newDeaths.replace(null, '0');
    modalh4totalDeaths.textContent = "Total Deaths: " + totalDeaths.replace(null, '0');
    modalh4totalTests.textContent = "Total Tests: " + totalTests.replace(null, '0');
    modalh6Time.textContent = "Last Updated: " + time.replace(null, '0');

    // -------------- APPEND TO SMALL BOX --------------------

    showCountry.appendChild(h2header);
    showCountry.appendChild(h4newCases);
    showCountry.appendChild(h4activeCases);
    showCountry.appendChild(h4newDeaths);
    showCountry.appendChild(h4totalDeaths);
    showCountry.appendChild(showMoreInfoButton);

    // -------------- APPEND TO MODAL --------------------

    modalshowCountry.appendChild(modalh2header);
    modalshowCountry.appendChild(modalh4activeCases);
    modalshowCountry.appendChild(modalh4criticalCases);
    modalshowCountry.appendChild(modalh4newCases);
    modalshowCountry.appendChild(modalh4recoveredCases);
    modalshowCountry.appendChild(modalh4totalCases);
    modalshowCountry.appendChild(modalh4newDeaths);
    modalshowCountry.appendChild(modalh4totalDeaths);
    modalshowCountry.appendChild(modalh4totalTests);
    modalshowCountry.appendChild(modalh6Time);

    modalshowCountry.appendChild(modalCloseButton);
    })

    // -------------- TOGGLE DATA LOADER ELEMENT --------------------

    document.getElementById("loader-container").classList.toggle('show', false)
    document.getElementById("loader-container").classList.toggle('hide', true)
};