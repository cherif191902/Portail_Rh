# Script de vérification et d'installation des dépendances
Write-Host "🔧 VÉRIFICATION DES DÉPENDANCES - Portail RH" -ForegroundColor Blue
Write-Host "=" * 50 -ForegroundColor Blue

# Fonction pour vérifier si une commande existe
function Test-Command {
    param($cmdname)
    return [bool](Get-Command -Name $cmdname -ErrorAction SilentlyContinue)
}

# Vérifications
$javaInstalled = Test-Command "java"
$mysqlInstalled = Test-Command "mysql"
$nodeInstalled = Test-Command "node"
$npmInstalled = Test-Command "npm"

Write-Host "📋 ÉTAT DES DÉPENDANCES:" -ForegroundColor Yellow
Write-Host "========================" -ForegroundColor Yellow

# Java
if ($javaInstalled) {
    $javaVersion = java -version 2>&1 | Select-String "version" | Select-Object -First 1
    Write-Host "✅ Java: INSTALLÉ" -ForegroundColor Green
    Write-Host "   Version: $javaVersion" -ForegroundColor Gray
} else {
    Write-Host "❌ Java: NON INSTALLÉ" -ForegroundColor Red
    Write-Host "   📥 Télécharger: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" -ForegroundColor Cyan
}

# Node.js
if ($nodeInstalled) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js: INSTALLÉ ($nodeVersion)" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js: NON INSTALLÉ" -ForegroundColor Red
    Write-Host "   📥 Télécharger: https://nodejs.org/" -ForegroundColor Cyan
}

# NPM
if ($npmInstalled) {
    $npmVersion = npm --version
    Write-Host "✅ NPM: INSTALLÉ ($npmVersion)" -ForegroundColor Green
} else {
    Write-Host "❌ NPM: NON INSTALLÉ (inclus avec Node.js)" -ForegroundColor Red
}

# MySQL
if ($mysqlInstalled) {
    Write-Host "✅ MySQL: INSTALLÉ" -ForegroundColor Green
} else {
    Write-Host "❌ MySQL: NON INSTALLÉ" -ForegroundColor Red
    Write-Host "   📥 Télécharger: https://dev.mysql.com/downloads/mysql/" -ForegroundColor Cyan
    Write-Host "   🐳 Alternative: Docker MySQL" -ForegroundColor Cyan
}

Write-Host "`n" + "=" * 50 -ForegroundColor Blue

# Résumé et instructions
$allInstalled = $javaInstalled -and $nodeInstalled -and $npmInstalled -and $mysqlInstalled

if ($allInstalled) {
    Write-Host "🎉 TOUTES LES DÉPENDANCES SONT INSTALLÉES !" -ForegroundColor Green
    Write-Host "`n📝 ÉTAPES SUIVANTES:" -ForegroundColor Yellow
    Write-Host "1. Démarrer MySQL" -ForegroundColor White
    Write-Host "2. Exécuter: .\mvnw.cmd spring-boot:run" -ForegroundColor White
    Write-Host "3. Le frontend est déjà démarré sur http://localhost:4200" -ForegroundColor White
} else {
    Write-Host "⚠️  DÉPENDANCES MANQUANTES DÉTECTÉES" -ForegroundColor Yellow
    Write-Host "`n📝 ACTIONS REQUISES:" -ForegroundColor Yellow
    
    if (-not $javaInstalled) {
        Write-Host "1. 📥 Installer Java JDK 11 ou supérieur" -ForegroundColor White
        Write-Host "   - Télécharger depuis: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" -ForegroundColor Cyan
        Write-Host "   - Ou utiliser OpenJDK: https://adoptopenjdk.net/" -ForegroundColor Cyan
        Write-Host "   - Ajouter JAVA_HOME et java au PATH" -ForegroundColor Gray
    }
    
    if (-not $mysqlInstalled) {
        Write-Host "2. 📥 Installer MySQL Server" -ForegroundColor White
        Write-Host "   - Télécharger depuis: https://dev.mysql.com/downloads/mysql/" -ForegroundColor Cyan
        Write-Host "   - Ou utiliser XAMPP: https://www.apachefriends.org/fr/" -ForegroundColor Cyan
        Write-Host "   - Configurer avec mot de passe vide pour l'utilisateur root" -ForegroundColor Gray
    }
}

Write-Host "`n🔗 URLS UTILES:" -ForegroundColor Blue
Write-Host "- Frontend Angular: http://localhost:4200" -ForegroundColor Cyan
Write-Host "- Backend API: http://localhost:8089" -ForegroundColor Cyan
Write-Host "- Test API: Ouvrir test-api.html dans un navigateur" -ForegroundColor Cyan

Write-Host "`n👤 COMPTE DE TEST:" -ForegroundColor Blue
Write-Host "- Matricule: TEST001" -ForegroundColor Cyan
Write-Host "- Mot de passe: password123" -ForegroundColor Cyan

Write-Host "`n💡 CONSEIL:" -ForegroundColor Yellow
Write-Host "Une fois toutes les dépendances installées, relancer ce script pour vérifier." -ForegroundColor White

Write-Host "`n" + "=" * 50 -ForegroundColor Blue
Write-Host "🔚 Vérification terminée" -ForegroundColor Blue

# Pause pour permettre la lecture
Read-Host "`nAppuyez sur Entrée pour continuer..."