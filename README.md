# templates

This monorepo contains a collection of templates for various languages and frameworks. Each template is designed to help you kickstart your projects with a modern development environment and best practices already set up.

## Available templates

- [node-typescript](./packages/node-typescript/) - A Node.js TypeScript template with essential tools and configurations.
- [turborepo-changesets](./packages/turborepo-changesets/) - A monorepo template using Turborepo pnpm workspaces and Changesets.

## Installation

To create a new project using one of these templates, you can use [degit](https://github.com/Rich-Harris/degit) to copy the repository without the Git history:

First, make sure you have degit installed globally:

```bash
pnpm install -g degit
```

Next, run the following command, replacing <TEMPLATE_NAME> with the name of the desired template, and <YOUR_PROJECT_NAME> with your desired project name:

```bash
degit theurgi/templates/packages/<TEMPLATE_NAME> <YOUR_PROJECT_NAME>
cd <YOUR_PROJECT_NAME>
```
