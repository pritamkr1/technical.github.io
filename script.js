const btn = document.querySelector('i');


btn.addEventListener('click', darkmodefunction);

function darkmodefunction(){
    var darkBody = document.body;
    darkBody.classList.toggle("dark-mode");                        
}