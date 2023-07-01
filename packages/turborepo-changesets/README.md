# turborepo-changesets

A monorepo template using [Turborepo](https://github.com/vercel/turbo), pnpm workspaces, and [Changesets](https://github.com/changesets/changesets). In addition to the aforementioned, the template includes:

- GitHub Actions
- ESLint
- Prettier
- Husky
- lint-staged
- commitlint
- Conventional Commits
- tsup

## Installation

To create a new project using this template, you can use [degit](https://github.com/Rich-Harris/degit) to copy the repository without the Git history:

First, make sure you have degit installed globally:

```bash
pnpm install -g degit
```

Next, run the following command, replacing <YOUR_PROJECT_NAME> with your desired project name:

```bash
degit theurgi/templates/packages/turborepo-changesets <YOUR_PROJECT_NAME>
cd <YOUR_PROJECT_NAME>
```

## Set up

After you've installed the template, you need to install the dependencies:

```bash
pnpm install
```

Next, initialize a git:

```bash
git init
```

Once you've installed the dependencies and initialized a git repository, run the following command to set up Husky:

```bash
pnpm run prepare
```
