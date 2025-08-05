#!/bin/bash

echo "GitHub Push Helper Script"
echo "========================"
echo ""
echo "This script will help you push your code to GitHub."
echo ""
echo "Prerequisites:"
echo "1. Create the repository on GitHub: https://github.com/new"
echo "   - Repository name: CustomKitchensandBathsbyLopez"
echo "   - Make it public or private as needed"
echo "   - Don't initialize with README, .gitignore, or license"
echo ""
echo "2. Create a Personal Access Token:"
echo "   - Go to: https://github.com/settings/tokens"
echo "   - Click 'Generate new token (classic)'"
echo "   - Give it a name like 'CustomKitchens Push'"
echo "   - Select 'repo' scope"
echo "   - Generate and copy the token"
echo ""
echo "3. When you run 'git push', use:"
echo "   - Username: your-github-username"
echo "   - Password: your-personal-access-token (NOT your GitHub password)"
echo ""
echo "Press Enter when ready to push..."
read

# The actual push command
git push -u origin main

echo ""
echo "If successful, your code is now on GitHub!"
echo "Repository URL: https://github.com/ObulusDesigns/CustomKitchensandBathsbyLopez"