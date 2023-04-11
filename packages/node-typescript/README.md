# node-typescript

A Node.js TypeScript template that includes configurations and tools for a modern development environment. The template is set up with:

- TypeScript
- ESLint
- Prettier
- Vitest
- Husky
- lint-staged
- commitlint
- Conventional Commits
- tsup
- dotenv

Additionally, it includes a GitHub Actions workflow for publishing with semantic-release.

## Installation

To create a new project using this template, you can use [degit](https://github.com/Rich-Harris/degit) to copy the repository without the Git history:

First, make sure you have degit installed globally:

```bash
pnpm install -g degit
```

Next, run the following command, replacing <YOUR_PROJECT_NAME> with your desired project name:

```bash
degit theurgi/templates/packages/node-typescript <YOUR_PROJECT_NAME>
cd <YOUR_PROJECT_NAME>
```

## Set up

After you've installed the template, you need to install the dependencies:

```bash
pnpm install
```

Once you've installed the dependencies, run the following command to set up Husky:

```bash
pnpm run prepare
```

## Post-Installation Checklist

After installing the template, make sure to complete the following tasks to personalize and configure your project:

1. Update the `package.json` fields:

- [ ] `name`: Set this to your project name.
- [ ] `description`: Add a brief description of your project.
- [ ] `repository`: Update the repository URL to match your own project's repository.
- [ ] `author`: Add your name or your organization's name.
- [ ] `license`: Update the license field if needed.

2. Update the `LICENSE` file:

- [ ] Replace the placeholder name and year with your own name (or organization name) and the current year.

3. Set up environment variables:

- [ ] Update the `.env` file with any environment-specific values your project requires.

4. Set up a publishing workflow:

- [ ] Configure the `publish.yml` GitHub Actions workflow with the necessary secrets and settings for your project.

## Usage

Here are some useful scripts included in the template:

- `build`: Build the TypeScript project using tsup.
- `format`: Format the code using Prettier.
- `lint`: Lint the code using ESLint.
- `test`: Run the tests using Vitest.
- `type-check`: Type-check the code using TypeScript.
