import type { PlopTypes } from '@turbo/gen';

const generator = (plop: PlopTypes.NodePlopAPI): void => {
  plop.setGenerator('package-template', {
    description: 'package-template',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: 'Package name:',
        validate: (value: string) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'package name is required';
        },
      },
      {
        type: 'checkbox',
        name: 'devDependencies',
        message: 'Select the devDependencies you want to include:',
        choices: [
          { name: '@sambad/sds', value: '@sambad/sds' },
          { name: '@sambad/eslint-config', value: '@sambad/eslint-config' },
          {
            name: '@sambad/typescript-config',
            value: '@sambad/typescript-config',
          },
        ],
      },
      {
        type: 'list',
        name: 'eslintConfigOption',
        message: 'Enter eslint config option:',
        choices: [
          {
            name: 'library',
            value: 'library',
          },
          {
            name: 'next',
            value: 'next',
          },
          {
            name: 'react-internal',
            value: 'react-internal',
          },
        ],
        when: (answers) => answers.devDependencies.includes('@sambad/eslint-config'),
      },
      {
        type: 'list',
        name: 'typescriptConfigOption',
        message: 'Enter typescript config option:',
        choices: [
          {
            name: 'base',
            value: 'base',
          },
          {
            name: 'nextjs',
            value: 'nextjs',
          },
          {
            name: 'react-library',
            value: 'react-library',
          },
        ],
        when: (answers) => answers.devDependencies.includes('@sambad/typescript-config'),
      },
    ],

    actions: (answer) => {
      const actions: Array<PlopTypes.ActionType> = [
        // package.json 생성
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/packages/core//{{ dashCase packageName }}/package.json`,
          templateFile: 'templates/package.hbs',
          abortOnFail: true,
        },
        // src 폴더 생성
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/packages/core/{{ dashCase packageName }}/src/.gitkeep`,
        },
      ];

      if (!answer || !answer.devDependencies.length) {
        return actions;
      }

      // devDependencies 추가
      const devDeps: Record<string, string> = {};
      if (answer.devDependencies.includes('@sambad/sds')) {
        devDeps['@sambad/sds'] = 'workspace:*';
      }

      if (answer.devDependencies.includes('@sambad/eslint-config')) {
        devDeps['@sambad/eslint-config'] = 'workspace:*';
        devDeps['@types/eslint'] = '^8.56.5';
        devDeps['eslint'] = '^8.57.0';

        actions.push({
          type: 'add',
          path: '{{ turbo.paths.root }}/packages/core/{{ dashCase packageName }}/.eslintrc.js',
          templateFile: 'templates/eslintrc.hbs',
        });
      }

      if (answer.devDependencies.includes('@sambad/typescript-config')) {
        devDeps['@sambad/typescript-config'] = 'workspace:*';
        devDeps['typescript'] = '^5.3.3';

        actions.push({
          type: 'add',
          path: '{{ turbo.paths.root }}/packages/core/{{ dashCase packageName }}/tsconfig.json',
          templateFile: 'templates/tsconfig.hbs',
        });
      }

      actions.push({
        type: 'modify',
        path: '{{ turbo.paths.root }}/packages/core/{{ dashCase packageName }}/package.json',
        transform: (fileContents) => {
          const packageJson = JSON.parse(fileContents);
          packageJson.devDependencies = {
            ...(packageJson.devDependencies || {}),
            ...devDeps,
          };
          return JSON.stringify(packageJson, null, 2);
        },
      });

      return actions;
    },
  });
};

export default generator;
