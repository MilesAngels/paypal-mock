//Made to make DOM manipulations based on screen sizes
let new_features = document.getElementById('new-features');
let get_app = document.getElementById('get-app');

if (screen.width < 600) {
    get_app.innerText = "Get the app";
}

if(screen.width >= 600) {
    get_app.innerText = "Get the app";
}