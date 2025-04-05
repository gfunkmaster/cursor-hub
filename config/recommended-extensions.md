# Recommended VS Code Extensions for Cursor AI

## Essential Extensions

### Code Quality & Intelligence
- [Cursor](https://marketplace.visualstudio.com/items?itemName=cursor.cursor-vscode) - Cursor AI integration
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - JavaScript linting
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatting
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Inline error messages
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - Package size hints

### Git Integration
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Git supercharged
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Git history visualization
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) - Git log viewer

### Development Tools
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - Auto rename paired HTML/XML tags
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Autocomplete filenames
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - Todo comments management
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) - Human-friendly comments

### Themes & Icons
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - Material Design Icons
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) - Atom's iconic theme
- [GitHub Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme) - GitHub's VS Code theme

## Installation

You can install all extensions at once by running:

```bash
code --install-extension cursor.cursor-vscode && \
code --install-extension dbaeumer.vscode-eslint && \
code --install-extension esbenp.prettier-vscode && \
code --install-extension usernamehw.errorlens && \
code --install-extension wix.vscode-import-cost && \
code --install-extension eamodio.gitlens && \
code --install-extension mhutchie.git-graph && \
code --install-extension donjayamanne.githistory && \
code --install-extension formulahendry.auto-rename-tag && \
code --install-extension christian-kohler.path-intellisense && \
code --install-extension Gruntfuggly.todo-tree && \
code --install-extension aaron-bond.better-comments && \
code --install-extension PKief.material-icon-theme && \
code --install-extension zhuangtongfa.Material-theme && \
code --install-extension GitHub.github-vscode-theme
```

## Configuration

After installing the extensions:

1. Open VS Code Settings (Cmd/Ctrl + ,)
2. Copy the settings from `vscode-settings.json` in this project
3. Restart VS Code to apply all changes

## Usage with Cursor AI

These extensions enhance Cursor AI by:
- Providing better code intelligence
- Improving code quality checks
- Enhancing Git workflow
- Making code more readable
- Streamlining development workflow

## Pro Tips

1. Use Todo Tree to track Cursor AI prompts with `// ✨Cursor:` prefix
2. GitLens + Cursor AI for better code understanding
3. Error Lens for immediate feedback
4. Import Cost to keep bundle size in check
5. Better Comments for clear documentation 