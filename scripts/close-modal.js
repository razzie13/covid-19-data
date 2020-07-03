function closeModal()  {
    document.getElementById("morecountryinfo").classList.toggle("show", false);
    document.getElementById("morecountryinfo").classList.toggle("hide", true);

    let showCountry = document.getElementById('morecountryinfo');
    let h2header = document.getElementById("h2-sc-modal");
    let h4newCases = document.getElementById("h4-nc-modal");
    let h4criticalCases = document.getElementById('h4-cc-modal');
    let h4recoveredCases = document.getElementById('h4-rc-modal');
    let h4totalCases = document.getElementById('h4-tc-modal');
    let h4activeCases = document.getElementById("h4-ac-modal");
    let h4newDeaths= document.getElementById('h4-nd-modal');
    let h4totalDeaths = document.getElementById('h4-td-modal');
    let h4totalTests = document.getElementById('h4-tt-modal');
    let modalh6Time = document.getElementById('h6-time-modal');
    let closeButton = document.getElementById('modal-close-button');

    showCountry.removeChild(h2header);
    showCountry.removeChild(h4newCases);
    showCountry.removeChild(h4activeCases);
    showCountry.removeChild(h4criticalCases);
    showCountry.removeChild(h4recoveredCases);
    showCountry.removeChild(h4totalCases);
    showCountry.removeChild(h4newDeaths);
    showCountry.removeChild(h4totalDeaths);   
    showCountry.removeChild(h4totalTests);
    showCountry.removeChild(modalh6Time);
    showCountry.removeChild(closeButton);     
}