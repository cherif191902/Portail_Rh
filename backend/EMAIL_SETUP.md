# Configuration SMTP (Gmail) — Guide rapide
```markdown
# Configuration SMTP (Mailtrap) — Guide rapide

Ce projet utilise Mailtrap en environnement de développement pour capturer les emails envoyés par l'application.

1) Obtenir vos identifiants Mailtrap
- Créez un compte sur https://mailtrap.io et récupérez les valeurs sandbox (host, port, username, password).

2) Configurer l'application en local
- Le fichier `src/main/resources/application-dev.properties` est préparé pour utiliser des variables d'environnement :
	- `spring.mail.host=smtp.mailtrap.io`
	- `spring.mail.port=587`
	- `spring.mail.username=${SMTP_USERNAME}`
	- `spring.mail.password=${SMTP_PASSWORD}`

- Exemple (PowerShell) :
```powershell
$env:SMTP_USERNAME = 'VOTRE_MAILTRAP_USERNAME'
$env:SMTP_PASSWORD = 'VOTRE_MAILTRAP_PASSWORD'
mvn -Dspring-boot.run.profiles=dev spring-boot:run
```

3) Tester l'envoi
- Après démarrage, effectuez une requête POST sur `/api/auth/signup` (ex: via `Invoke-RestMethod`) ; les emails seront visibles dans la sandbox Mailtrap.

4) Sécurité
- Ne commitez jamais vos identifiants réels. Utilisez un `.env` ignoré par Git ou des secrets CI/CD.

Si vous voulez, j'ajoute un script PowerShell `run-backend-with-env.ps1` prêt à l'emploi qui charge un `.env` et démarre l'application en profil `dev`.

```

