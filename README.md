# webpack-nested-entries

Architecture:

```
src
├── core
└── plugins
    ├── pluginA
    ├── pluginB
    └── pluginC
```

Compile:

```
npm run dist
```

## Current output

Folder structure:

```
dist
├── core.js
├── pluginA.js
├── pluginB.js
└── pluginC.js
```

UMD libraries:

```
core.*
pluginA.*
pluginB.*
pluginC.*
```

## Wanted output

Folder structure:

```
dist
├── core.js
└── plugins
    ├── pluginA.js
    ├── pluginB.js
    └── pluginC.js
```

UMD libraries:

```
core.*
plugins.pluginA.*
plugins.pluginB.*
plugins.pluginC.*
```

