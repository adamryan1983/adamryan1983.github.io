const theme = localStorage.getItem('theme');
let choice = 'light';

// if(theme === null){
//     document.getElementById('theme-style').href = 'styles/style.css';
// }
// else {
//     document.getElementById('theme-style').href = 'styles/style-light.css';
// }

const themer = document.getElementById('themeSwitcher');

themer.addEventListener('click', function() {
    if (choice == 'light') {
        document.getElementById('theme-style').href = 'styles/style-light.css';
        choice = 'dark';
    }
    else {
        document.getElementById('theme-style').href = 'styles/style.css';
        choice = 'light';
    }
    console.log("option clicked", choice);
    localStorage.setItem('theme',choice);
});

// function setTheme(choice) {
//     switch (mode) {
//         case "light-mode":
//             document.getElementById('theme-style').href = 'style-light.css';
//             break;
//         case "dark-mode":
//             document.getElementById('theme-style').href = 'styles.css';
//             break;
//         case "green-mode":
//             document.getElementById('theme-style').href = 'green.css';
//             break;
//         case "purple-mode":
//             document.getElementById('theme-style').href = 'purple.css';
//             break;
//         default:
//             document.getElementById('theme-style').href = 'styles.css';
//             break;
//     };
    

