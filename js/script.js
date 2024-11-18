document.querySelectorAll('.star').forEach((star, index) => {
    star.addEventListener('click', () => {
        document.querySelectorAll('.star').forEach((s, i) => {
            s.style.color = i <= index ? 'gold' : 'gray';
        });
    });
});

const toggleThemeButton = document.querySelector('#toggle-theme');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.classList.add('night-theme');
}

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('night-theme');
    const theme = document.body.classList.contains('night-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});


document.addEventListener('DOMContentLoaded', () => {

    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;

            if (!terms) {
                alert('Please accept the terms and conditions.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            const user = { name, email, password };
            localStorage.setItem(email, JSON.stringify(user));

            alert('Registration successful! You can now log in.');
            window.location.href = 'sign-in.html'; 
        });
    }


    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const loginEmail = document.getElementById('loginEmail').value;
            const loginPassword = document.getElementById('loginPassword').value;

            const storedUser = localStorage.getItem(loginEmail);
            if (!storedUser) {
                alert('User not found. Please register first.');
                return;
            }

            const { name, password } = JSON.parse(storedUser);
            if (loginPassword !== password) {
                alert('Invalid password. Please try again.');
                return;
            }

      
            sessionStorage.setItem('loggedInUser', loginEmail);

            alert('Login successful!');
            window.location.href = 'index.html'; 
        });
    }

  
    const userNameLink = document.getElementById('userNameLink');
    if (userNameLink) {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const user = JSON.parse(localStorage.getItem(loggedInUser));
            if (user) {
                userNameLink.textContent = user.name;
                userNameLink.style.display = 'inline'; 
            }
        }
    }

   
    const goToLogin = document.getElementById('goToLogin');
    const goToRegistration = document.getElementById('goToRegistration');

    if (goToLogin) {
        goToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'sign-in.html';
        });
    }

    if (goToRegistration) {
        goToRegistration.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'sign-up.html';
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    
    const userNameLink = document.getElementById('userNameLink');
    const logoutButton = document.getElementById('logoutButton');
    const signinButton = document.getElementById('signinButton');
    const signupButton = document.getElementById('signupButton');
    
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const user = JSON.parse(localStorage.getItem(loggedInUser));
        if (user) {
            
            userNameLink.textContent = user.name;
            userNameLink.style.display = 'inline'; 
            logoutButton.style.display = 'inline';
            signinButton.style.display = 'none';
            signupButton.style.display = 'none';
        }

        
        if (logoutButton) {
            logoutButton.addEventListener('click', () => {
                sessionStorage.removeItem('loggedInUser'); 
                userNameLink.style.display = 'none'; 
                alert('You have logged out.');
                window.location.href = 'sign-in.html'; 
            });
        }
    } else {
        
        userNameLink.style.display = 'none';
    }
});
