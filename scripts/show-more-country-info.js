function showMoreCountryInfo()  {
    let showMoreInfoButton = document.getElementById('show-more-info-button')
    document.getElementById("morecountryinfo").classList.toggle("hide", false);
    document.getElementById("morecountryinfo").classList.toggle("show", true);
    document.getElementById('show-country').removeChild(showMoreInfoButton);
}