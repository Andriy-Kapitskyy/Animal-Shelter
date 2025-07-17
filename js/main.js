function toggle_language() {
    window.alert("Not available yet :(");
}


function toggle_theme() {
    if (document.documentElement.getAttribute('data-theme') !== 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', '');
    }
}

const href = window.location.href;

function search_redirect() {
    window.location.replace(`${href.substring(0, href.lastIndexOf('index.html'))}find.html?cc=${document.getElementById('cc').value}&city=${document.getElementById('city').value}&pet=${document.getElementById('pet').value}&age=${document.getElementById('age').value}&breed=${document.getElementById('breed').value}&sex=${document.getElementById('sex').value}`);
}