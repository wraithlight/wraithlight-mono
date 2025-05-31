#!/bin/bash

# ✅ SSOT: Required versions
declare -A required_versions=(
  ["Node"]="18.13.0"
  ["Python"]="3.11"
  ["Git"]="2.40.1"
  ["Docker"]="20.10.22"
)

# 🧠 Define apps using SSOT
apps=(
  "Node;node -v;brew install node@18;${required_versions[Node]}"
  "Python;python3 --version;brew install python@3.11;${required_versions[Python]}"
  "Git;git --version;brew install git@2.40.1;${required_versions[Git]}"
  "Docker;docker --version;brew install --cask docker;${required_versions[Docker]}"
)

# 🎨 Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# 📦 Tracking
declare -A install_commands
declare -A installed_versions
declare -a missing_apps
declare -a outdated_apps
declare -a good_apps

echo "🔍 Checking installed applications and versions:"

for app in "${apps[@]}"; do
  IFS=';' read -r name check_cmd install_cmd required_version <<< "$app"
  install_commands["$name"]="$install_cmd"

  version_output=$($check_cmd 2>/dev/null)
  if [ $? -ne 0 ]; then
    echo "  ${RED}❌ $name is NOT installed.${NC}"
    missing_apps+=("$name")
    continue
  fi

  # Extract version
  case "$name" in
    Node|Git|Docker) version=$(echo "$version_output" | grep -Eo '[0-9]+\.[0-9]+\.[0-9]+') ;;
    Python) version=$(echo "$version_output" | grep -Eo '3\.[0-9]+(\.[0-9]+)?') ;;
    *) version="unknown" ;;
  esac

  installed_versions["$name"]=$version

  if [[ -n "$required_version" && "$(printf '%s\n' "$required_version" "$version" | sort -V | head -n1)" != "$required_version" ]]; then
    echo "  ${YELLOW}⚠️  $name version $version is outdated (required: $required_version).${NC}"
    outdated_apps+=("$name")
  else
    echo "  ${GREEN}✅ $name is installed with correct version ($version).${NC}"
    good_apps+=("$name")
  fi
done

# 🔧 Prompt to install missing apps
if [ ${#missing_apps[@]} -gt 0 ]; then
  echo -e "\n${RED}❌ Missing Applications:${NC}"
  for app in "${missing_apps[@]}"; do
    echo "  - $app"
    echo -e "${BLUE}❓ Would you like to install $app now? (y/n): ${NC}"
    read -r answer
    if [[ "$answer" =~ ^[Yy]$ ]]; then
      echo "  ➡️ Installing $app..."
      eval "${install_commands[$app]}"
    else
      echo "  ⏭️  Skipped installation of $app."
    fi
  done
fi

# ♻️ Prompt to upgrade outdated apps
if [ ${#outdated_apps[@]} -gt 0 ]; then
  echo "\n${YELLOW}⚠️ Outdated Applications:${NC}"
  for app in "${outdated_apps[@]}"; do
    echo "  - $app (Installed: ${installed_versions[$app]}, Required: ${required_versions[$app]})"
    echo "${BLUE}❓ Would you like to upgrade $app now? (y/n): ${NC}"
    read -r answer
    if [[ "$answer" =~ ^[Yy]$ ]]; then
      echo "  ➡️ Upgrading $app..."
      eval "${install_commands[$app]}"
    else
      echo "  ⏭️  Skipped upgrade of $app."
    fi
  done
fi

# ✅ Summary of up-to-date apps
if [ ${#good_apps[@]} -gt 0 ]; then
  echo "\n${GREEN}✅ Up-to-date Applications:${NC}"
  for app in "${good_apps[@]}"; do
    echo "  - $app (Version: ${installed_versions[$app]})"
  done
fi

# 🎉 All good message
if [ ${#missing_apps[@]} -eq 0 ] && [ ${#outdated_apps[@]} -eq 0 ]; then
  echo "\n${GREEN}🎉 All applications are installed and meet the required versions!${NC}"
fi
