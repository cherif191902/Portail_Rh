# Script pour démarrer le backend Spring Boot
Write-Host "🚀 Démarrage du backend Spring Boot..." -ForegroundColor Green

# Navigation vers le répertoire backend
Set-Location -Path $PSScriptRoot

# Démarrage avec Maven wrapper
Write-Host "📦 Utilisation du Maven wrapper..." -ForegroundColor Yellow
$process = Start-Process -FilePath ".\mvnw.cmd" -ArgumentList "spring-boot:run", "-Dspring-boot.run.profiles=dev" -PassThru -NoNewWindow

Write-Host "✅ Backend démarré avec PID: $($process.Id)" -ForegroundColor Green
Write-Host "🔗 API disponible sur: http://localhost:8089" -ForegroundColor Blue
Write-Host "📊 Dashboard disponible sur: http://localhost:4200" -ForegroundColor Blue
Write-Host "ℹ️  Pour arrêter le backend: Ctrl+C ou fermez cette fenêtre" -ForegroundColor Cyan

# Attendre que l'utilisateur arrête le script
try {
    Wait-Process -Id $process.Id
} catch {
    Write-Host "⚠️  Processus arrêté ou erreur détectée" -ForegroundColor Yellow
}