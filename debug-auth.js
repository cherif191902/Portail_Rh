// Script de débogage pour vérifier l'authentification
// À exécuter dans la console du navigateur pour diagnostiquer les problèmes d'auth

console.log('=== DÉBOGAGE AUTHENTIFICATION ===');

// 1. Vérifier le token dans sessionStorage
const token = sessionStorage.getItem('auth-token');
console.log('1. Token dans sessionStorage:', token ? 'PRÉSENT' : 'ABSENT');

if (token) {
  console.log('   Longueur du token:', token.length);
  console.log('   Début du token:', token.substring(0, 20) + '...');
  
  // Essayer de décoder le JWT (partie payload)
  try {
    const parts = token.split('.');
    if (parts.length === 3) {
      const payload = JSON.parse(atob(parts[1]));
      console.log('   Token payload:', payload);
      
      // Vérifier l'expiration
      if (payload.exp) {
        const expirationDate = new Date(payload.exp * 1000);
        const now = new Date();
        console.log('   Expiration:', expirationDate);
        console.log('   Maintenant:', now);
        console.log('   Token expiré:', now > expirationDate ? 'OUI' : 'NON');
      }
    }
  } catch (e) {
    console.log('   Erreur de décodage JWT:', e.message);
  }
} else {
  console.log('   ⚠️ PROBLÈME: Aucun token trouvé dans sessionStorage');
}

// 2. Vérifier l'utilisateur dans sessionStorage
const user = sessionStorage.getItem('auth-user');
console.log('2. Utilisateur dans sessionStorage:', user ? 'PRÉSENT' : 'ABSENT');

if (user) {
  try {
    const userData = JSON.parse(user);
    console.log('   Données utilisateur:', userData);
    console.log('   Rôles utilisateur:', userData.roles);
  } catch (e) {
    console.log('   Erreur de parsing user:', e.message);
  }
} else {
  console.log('   ⚠️ PROBLÈME: Aucune donnée utilisateur trouvée');
}

// 3. Vérifier les cookies (si utilisés)
console.log('3. Cookies du domaine:', document.cookie);

// 4. Test d'une requête API simple
console.log('4. Test de requête API...');

fetch('http://localhost:8089/api/users/all', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  }
})
.then(response => {
  console.log('   Statut de la réponse:', response.status);
  console.log('   Headers de la réponse:', [...response.headers.entries()]);
  return response.text();
})
.then(data => {
  console.log('   Données reçues:', data.substring(0, 200) + '...');
})
.catch(error => {
  console.log('   ❌ Erreur de requête:', error);
});

// 5. Recommandations
console.log('5. RECOMMANDATIONS:');
if (!token) {
  console.log('   → Vous devez vous connecter d\'abord');
  console.log('   → Vérifiez que la page de login fonctionne correctement');
} else {
  console.log('   → Token présent, vérifiez l\'expiration et les rôles');
  console.log('   → Vérifiez que le backend accepte ce token');
  console.log('   → Vérifiez la configuration CORS du backend');
}

console.log('=== FIN DU DÉBOGAGE ===');