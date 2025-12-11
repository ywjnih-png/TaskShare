// Pastikan firebase.js sudah di-load dulu
// auth & db sudah tersedia dari firebase.js

function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Email dan password wajib diisi');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Simpan data user di Firestore
            db.collection('users').doc(user.uid).set({
                email: email,
                saldo: 0,
                refCode: generateRefCode(),
                invitedBy: null,
                lastCheckin: null
            })
            .then(() => {
                alert('Daftar sukses! Silakan login.');
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
            });
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Email dan password wajib diisi');
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login sukses → redirect ke dashboard
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
}

// Fungsi generate referral code sederhana
function generateRefCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'REF';
    for (let i = 0; i < 4; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}
