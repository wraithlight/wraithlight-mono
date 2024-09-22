CG='\033[0;32m'
NC='\033[0m'

echo Removing ignored files and folders from git...
git rm -rf --cached .
git clean -dfX
echo =====================
printf "WRAITHLIGHT ${CG}GIT PURGE${NC} SUCCEEDED\n"
