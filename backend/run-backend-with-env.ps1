# Charge un fichier .env et démarre l'application Spring Boot en profil dev, puis appelle l'API signup pour tester l'envoi d'email.
# Usage: exécuter depuis le dossier backend :
#   .\run-backend-with-env.ps1

$envFile = Join-Path $PSScriptRoot '.env'
if (-Not (Test-Path $envFile)) {
    Write-Error "Fichier .env introuvable dans $PSScriptRoot. Créez le avec SMTP_USERNAME et SMTP_PASSWORD."
    exit 1
}

# Charger le .env (simple parser key=value, ignore commentaires)
Get-Content $envFile | ForEach-Object {
    $_ = $_.Trim()
    if ($_.StartsWith('#') -or $_ -eq '') { return }
    # Support both KEY=VALUE and PowerShell style $env:KEY = 'VALUE'
    if ($_.StartsWith('$env:')) {
        # Remove leading $env: and split by '='
        $rest = $_.Substring(5)
        $parts2 = $rest -split '=', 2
        if ($parts2.Length -eq 2) {
            $k2 = $parts2[0].Trim()
            $v2 = $parts2[1].Trim().Trim("'\"")
            Write-Host ("Setting env {0}" -f $k2)
            Set-Item -Path Env:$k2 -Value $v2
        }
        return
    }
    $parts = $_ -split '=', 2
    if ($parts.Length -eq 2) {
        $key = $parts[0].Trim()
        $value = $parts[1].Trim().Trim("'\"")
    Write-Host ("Setting env {0}" -f $key)
    Set-Item -Path Env:$key -Value $value
    }
}

# Lancer le backend avec le profil dev (utilise application-dev.properties si besoin)
Write-Host "Démarrage du backend (Spring Boot)..."
# Start Spring Boot and wait. Use the current console so logs are visible.
Write-Host "Launching 'mvn spring-boot:run' (logs will appear below)."
& mvn spring-boot:run

# Après démarrage, vous pouvez appeler l'API signup via curl ou Invoke-RestMethod
Write-Host "Backend lancé ou démarrage en cours. Exemple d'appel pour tester signup:" 
Write-Host "Invoke-RestMethod -Uri http://localhost:8089/api/auth/signup -Method Post -Body (@{ nom='prenom'; prenom='nom'; email='destinataire@example.com' } | ConvertTo-Json) -ContentType 'application/json'"
