#!/bin/bash
# Script de test pour vérifier l'absence de références à ROLE_CHEF_SERVICE

echo "🔍 Vérification de l'absence de ROLE_CHEF_SERVICE dans le backend..."

# Vérifier dans les fichiers Java
echo "📂 Vérification dans les fichiers Java..."
JAVA_REFS=$(find backend/src -name "*.java" -exec grep -l "ROLE_CHEF_SERVICE" {} \; | wc -l)
if [ $JAVA_REFS -eq 0 ]; then
    echo "✅ Aucune référence à ROLE_CHEF_SERVICE trouvée dans les fichiers Java"
else
    echo "❌ $JAVA_REFS références à ROLE_CHEF_SERVICE trouvées dans les fichiers Java"
    find backend/src -name "*.java" -exec grep -n "ROLE_CHEF_SERVICE" {} +
fi

# Vérifier dans les fichiers SQL
echo "📂 Vérification dans les fichiers SQL..."
SQL_REFS=$(find backend/src -name "*.sql" -exec grep -l "ROLE_CHEF_SERVICE" {} \; | wc -l)
if [ $SQL_REFS -eq 0 ]; then
    echo "✅ Aucune référence à ROLE_CHEF_SERVICE trouvée dans les fichiers SQL"
else
    echo "❌ $SQL_REFS références à ROLE_CHEF_SERVICE trouvées dans les fichiers SQL"
    find backend/src -name "*.sql" -exec grep -n "ROLE_CHEF_SERVICE" {} +
fi

# Vérifier que les nouveaux rôles sont présents
echo "📂 Vérification de la présence des nouveaux rôles..."
CHEF_A_REFS=$(find backend/src -name "*.sql" -exec grep -l "ROLE_CHEF_A" {} \; | wc -l)
CHEF_B_REFS=$(find backend/src -name "*.sql" -exec grep -l "ROLE_CHEF_B" {} \; | wc -l)

if [ $CHEF_A_REFS -gt 0 ] && [ $CHEF_B_REFS -gt 0 ]; then
    echo "✅ Les nouveaux rôles ROLE_CHEF_A et ROLE_CHEF_B sont présents"
else
    echo "❌ Les nouveaux rôles ne sont pas correctement configurés"
fi

echo "🎯 Vérification terminée !"