CG='\033[0;32m'
CR='\033[0;31m'
NC='\033[0m'

echo Removing 'node_modules' folders...
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
echo Removing 'dist' folders...
find . -name 'dist' -type d -prune -exec rm -rf '{}' +
echo Removing 'yarn.lock' files...
find . -name 'yarn.lock' -type f -prune -exec rm -rf '{}' +
echo =====================
printf "WRAITHLIGHT ${CG}PURGE${NC} SUCCEEDED\n"
printf "${CR}You have to run 'yarn' again!${NC}\n"
