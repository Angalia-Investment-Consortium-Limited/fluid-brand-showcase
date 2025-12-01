# Git Setup Guide for fluid-brand-showcase

## ✅ Current Status

The **fluid-brand-showcase** project is now fully set up and ready for development with GitHub integration.

### Repository Information
- **GitHub Repository**: https://github.com/Angalia-Investment-Consortium-Limited/fluid-brand-showcase.git
- **Current Branch**: main
- **Remote Status**: Connected and up to date with origin/main
- **Latest Commit**: 6a15eba - "Improve home button visibility"

### Project Setup
- **Package Manager**: Yarn v1.22.22
- **Dependencies**: ✅ Installed successfully (428 packages)
- **Development Server**: ✅ Tested and working (runs on http://localhost:8080/)
- **Build Tool**: Vite v5.4.21
- **Framework**: React 18.3.1 with TypeScript

---

## 🚀 Common Git Commands

### Checking Status
```bash
cd fluid-brand-showcase
git status
```

### Pulling Latest Changes
```bash
cd fluid-brand-showcase
git pull origin main
```

### Making Changes and Committing
```bash
cd fluid-brand-showcase

# Check what files have changed
git status

# Add specific files
git add <filename>

# Or add all changes
git add .

# Commit with a message
git commit -m "Your commit message here"
```

### Pushing Changes to GitHub
```bash
cd fluid-brand-showcase
git push origin main
```

### Creating a New Branch
```bash
cd fluid-brand-showcase

# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Push the new branch to GitHub
git push -u origin feature/your-feature-name
```

### Switching Branches
```bash
cd fluid-brand-showcase

# Switch to an existing branch
git checkout branch-name

# Switch back to main
git checkout main
```

### Viewing Commit History
```bash
cd fluid-brand-showcase

# View recent commits
git log --oneline -10

# View detailed commit history
git log
```

### Checking Remote Configuration
```bash
cd fluid-brand-showcase
git remote -v
```

---

## 💻 Development Commands

### Start Development Server
```bash
cd fluid-brand-showcase
yarn dev
```
The server will start at: http://localhost:8080/

### Build for Production
```bash
cd fluid-brand-showcase
yarn build
```

### Preview Production Build
```bash
cd fluid-brand-showcase
yarn preview
```

### Run Linter
```bash
cd fluid-brand-showcase
yarn lint
```

---

## 📋 Typical Workflow

### 1. Start Working on a New Feature
```bash
cd fluid-brand-showcase

# Pull latest changes
git pull origin main

# Create a new branch
git checkout -b feature/new-feature

# Start development server
yarn dev
```

### 2. Make Changes and Test
- Edit your files
- Test in the browser at http://localhost:8080/
- Ensure everything works correctly

### 3. Commit and Push Changes
```bash
# Check what changed
git status

# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Add new feature: description of what you did"

# Push to GitHub
git push origin feature/new-feature
```

### 4. Create Pull Request (Optional)
- Go to GitHub repository
- Click "Compare & pull request"
- Review changes and create PR
- Merge after review

### 5. Merge to Main (if working directly)
```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge your feature branch
git merge feature/new-feature

# Push to GitHub
git push origin main
```

---

## 🔧 Troubleshooting

### If you get merge conflicts:
```bash
# Pull with rebase
git pull --rebase origin main

# Resolve conflicts in your editor
# Then continue the rebase
git rebase --continue

# Or abort if needed
git rebase --abort
```

### If you need to discard local changes:
```bash
# Discard changes to a specific file
git checkout -- <filename>

# Discard all local changes
git reset --hard HEAD
```

### If you need to update dependencies:
```bash
cd fluid-brand-showcase
yarn install
```

---

## 📝 Best Practices

1. **Always pull before starting work**: `git pull origin main`
2. **Commit frequently** with clear, descriptive messages
3. **Test your changes** before committing
4. **Use branches** for new features or experiments
5. **Keep commits focused** - one logical change per commit
6. **Write meaningful commit messages** that explain what and why

### Good Commit Message Examples:
- ✅ "Add contact form validation"
- ✅ "Fix navigation menu on mobile devices"
- ✅ "Update hero section styling"
- ❌ "Changes"
- ❌ "Fix stuff"
- ❌ "Update"

---

## 🎯 Quick Reference

| Command | Description |
|---------|-------------|
| `git status` | Check current status |
| `git pull` | Get latest changes |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit changes |
| `git push` | Push to GitHub |
| `git checkout -b branch-name` | Create new branch |
| `git checkout main` | Switch to main branch |
| `yarn dev` | Start dev server |
| `yarn build` | Build for production |

---

## ✨ Project is Ready!

Your fluid-brand-showcase project is now fully configured and ready for development. You can:
- ✅ Pull and push changes to GitHub
- ✅ Run the development server
- ✅ Build for production
- ✅ Collaborate with your team

Happy coding! 🚀
