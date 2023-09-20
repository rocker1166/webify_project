window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getElementById('name');
    const surname = sessionStorage.getItem('SURNAME');
    
    document.getElementById('op').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;

})