function removeSelectedCountryData()  {
    let showCountry = document.getElementById('show-country');
    let h2header = document.getElementById("h2-sc");
    let h4newCases = document.getElementById("h4-nc");
    let h4activeCases = document.getElementById("h4-ac");
    let h4newDeaths= document.getElementById('h4-nd');
    let h4totalDeaths = document.getElementById('h4-td');
    let showMoreInfoButton = document.getElementById('show-more-info-button')

    showCountry.removeChild(h2header);
    showCountry.removeChild(h4newCases);
    showCountry.removeChild(h4activeCases);
    showCountry.removeChild(h4newDeaths);
    showCountry.removeChild(h4totalDeaths);
    showCountry.removeChild(showMoreInfoButton);
}