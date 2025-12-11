// Pastikan firebase.js sudah di-load
auth.onAuthStateChanged((user) => {
    if (user) {
        loadUserData(user.uid);
    } else {
        // Kalau belum login → redirect ke index.html
        window.location.href = 'index.html';
    }
});

function loadUserData(uid) {
    const userRef = db.collection('users').doc(uid);
    userRef.get().then(doc => {
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('saldo').innerText = data.saldo || 0;
            document.getElementById('refcode').innerText = data.refCode;

            const currentUrl = window.location.origin + "/index.html?ref=" + data.refCode;
            document.getElementById('ref-link').value = currentUrl;
        }
    });
}

// === Task Check-in ===
function taskCheckin() {
    const user = auth.currentUser;
    const userRef = db.collection('users').doc(user.uid);

    userRef.get().then(doc => {
        const data = doc.data();
        const today = new Date().toISOString().split('T')[0];

        if (data.lastCheckin === today) {
            alert('Kamu sudah check-in hari ini!');
            return;
        }

        const newSaldo = (data.saldo || 0) + 1000; // contoh saldo tambah 1000
        userRef.update({
            saldo: newSaldo,
            lastCheckin: today
        }).then(() => {
            alert('Check-in sukses! Saldo bertambah 1000');
            document.getElementById('saldo').innerText = newSaldo;
        });
    });
}

// === Task Share FB ===
function taskShare() {
    alert('Share ke Facebook sudah tercatat! (manual verification)');
    // Bisa tambah logika tambah saldo disini jika mau otomatis
}

// === Logout ===
function logout() {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    });
}
