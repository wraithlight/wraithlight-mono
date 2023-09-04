CG='\033[0;32m'
NC='\033[0m'

echo Removing all branches except `main`...
git branch | grep -v "main" | xargs git branch -D
echo =====================
printf "WRAITHLIGHT ${CG}BRANCH PURGE${NC} SUCCEEDED\n"