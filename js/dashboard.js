auth.onAuthStateChanged((user) => {
    if (user) {
        loadUserData(user.uid);
    } else {
        window.location.href = 'index.html';
    }
});

function loadUserData(uid) {
    db.collection('users').doc(uid).get().then(doc => {
        if (doc.exists) {
            const data = doc.data();
            document.getElementById('saldo').innerText = data.saldo || 0;
            document.getElementById('refcode').innerText = data.refCode;
            const currentUrl = window.location.origin + "/index.html?ref=" + data.refCode;
            document.getElementById('ref-link').value = currentUrl;
        }
    });
}

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

        const newSaldo = (data.saldo || 0) + 1000;
        userRef.update({
            saldo: newSaldo,
            lastCheckin: today
        }).then(() => {
            alert('Check-in sukses! Saldo bertambah 1000');
            document.getElementById('saldo').innerText = newSaldo;
        });
    });
}

function taskShare() {
    alert('Share ke Facebook tercatat! (manual verification)');
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    });
}