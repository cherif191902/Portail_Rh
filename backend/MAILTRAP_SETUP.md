# Test Mailtrap via cURL / Configuration dev

Vous pouvez tester l'envoi SMTP vers Mailtrap avec cURL (libcurl compilé avec SMTP). Ci-dessous un exemple adapté.

> Remplacez `<YOUR_API_TOKEN>` par votre token Mailtrap (exemple donné dans la conversation). Ne commitez jamais ce token.

Exemple (PowerShell multi-lignes) :

```powershell
curl --ssl-reqd --url 'smtp://live.smtp.mailtrap.io:587' \
  --user 'api:5b386a3364c113ea0b6306603950a72a' \
  --mail-from hello@demomailtrap.co \
  --mail-rcpt destinataire@example.com \
  --upload-file - <<EOF
From: Magic Elves <hello@demomailtrap.co>
To: Mailtrap Sandbox <destinataire@example.com>
Subject: You are awesome!
Content-Type: text/plain; charset=utf-8

Congrats for sending test email with Mailtrap!
EOF
```

Si vous préférez tester via le backend (Spring Boot) :
1. Configurez `application-dev.properties` (déjà ajouté) pour utiliser les variables d'environnement `SMTP_USERNAME` et `SMTP_PASSWORD`.
2. Définissez les variables dans PowerShell :

```powershell
mvn -Dspring-boot.run.profiles=dev spring-boot:run
```

Exemple minimal pour Mailtrap (PowerShell) :
```powershell
$env:SMTP_USERNAME = 'VOTRE_MAILTRAP_USERNAME'
$env:SMTP_PASSWORD = 'VOTRE_MAILTRAP_PASSWORD'
mvn -Dspring-boot.run.profiles=dev spring-boot:run
mvn -Dspring-boot.run.profiles=dev spring-boot:run
```

Notes :
- Mailtrap fournit généralement des credentials distincts pour l'username et password SMTP. Adaptez selon votre espace Mailtrap.
- Ne publiez pas votre token dans un dépôt public.
