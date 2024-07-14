import { PlopTypes } from '@turbo/gen';
import { getWorkspaceList } from './../utils/getWorkSpaceList';

export type DependencyList = Record<string, string>;

export interface DependencyGroups {
  dependencies?: DependencyList;
  devDependencies?: DependencyList;
}

export interface ActionAnswers {
  workspace?: string;
  workSpaceName?: string;
  location?: string;
  dependency?: string[];
  dependencies?: string[];
  devDependencies?: string[];
  eslintConfigOption?: string;
  typescriptConfigOption?: string;
}

const generator = (plop: PlopTypes.NodePlopAPI): void => {
  plop.setHelper('getWorkspaceChoices', async () => {
    const workspaceList = await getWorkspaceList();
    const choices = workspaceList.map((name) => {
      return {
        name,
        value: name,
      };
    });
    return choices;
  });

  plop.setGenerator('workspace-template', {
    description: 'workspace-template',
    prompts: [
      // 워크스페이스 유형 (apps/packages)
      {
        type: 'list',
        name: 'workspace',
        message: 'What type of workspace should be added?',
        choices: ['app', 'package'],
      },
      // 워크스페이스 명
      {
        type: 'input',
        name: 'workspaceName',
        message: 'What is the name of the workspace?',
        validate: (value: string) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'workspace name is required';
        },
      },
      // 워크스페이스 경로 지정
      {
        type: 'input',
        name: 'location',
        message: (answers) => `Where should ${answers.workspaceName} be added?`,
        default: (answers: { workspace: string; workspaceName: string }) =>
          `${answers.workspace}s/${answers.workspaceName}`,
      },
      {
        type: 'confirm',
        name: 'addDependencies',
        message: (answers) => `Add workspace dependencies to "${answers.workspaceName}"?`,
      },
      // dependency
      {
        type: 'checkbox',
        name: 'dependency',
        message: (answers) => `Select all dependencies types to modify for "${answers.workspaceName}"`,
        choices: [
          { name: 'dependencies', value: 'dependencies' },
          { name: 'devDependencies', value: 'devDependencies' },
        ],
        when: (answers) => answers.addDependencies,
      },
      {
        type: 'checkbox',
        name: 'dependencies',
        message: (answers) => `Which packages should be added as dependencies to ${answers.workspaceName}"?`,
        choices: async () => await plop.getHelper('getWorkspaceChoices')(),
        when: (asnwers) => asnwers.dependency?.includes('dependencies'),
      },
      // devDependencies 추가
      {
        type: 'checkbox',
        name: 'devDependencies',
        message: (answers) => `Which packages should be added as devDependencies to ${answers.workspaceName}"?`,
        choices: async () => await plop.getHelper('getWorkspaceChoices')(),
        when: (asnwers) => asnwers.dependency?.includes('devDependencies'),
      },
      // eslint-config가 있는 경우 옵션 설정
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
        when: (answers) =>
          answers.dependencies?.includes('@sambad/eslint-config') ||
          answers.devDependencies?.includes('@sambad/eslint-config'),
      },
      // typescript-config가 있는 경우 옵션 설정
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
        when: (answers) =>
          answers.dependencies?.includes('@sambad/typescript-config') ||
          answers.devDependencies?.includes('@sambad/typescript-config'),
      },
    ],
    actions: (answers: ActionAnswers | undefined) => {
      const actions: Array<PlopTypes.ActionType> = [
        // package.json 생성
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/{{ location }}/package.json`,
          templateFile: 'templates/package.hbs',
          abortOnFail: true,
        },
        // src 폴더 생성
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/{{ location }}/src/.gitkeep`,
        },
      ];

      if (!answers) {
        return actions;
      }

      const selectedDependencies: DependencyGroups = {
        dependencies: {},
        devDependencies: {},
      };

      if (answers.dependency?.includes('dependencies') && answers.dependencies) {
        answers.dependencies.forEach((dep) => {
          selectedDependencies.dependencies![dep] = 'workspace:*';
        });
      }

      if (answers.dependency?.includes('devDependencies') && answers.devDependencies) {
        answers.devDependencies.forEach((dep) => {
          selectedDependencies.devDependencies![dep] = 'workspace:*';
        });
      }

      if (
        answers.dependencies?.includes('@sambad/eslint-config') ||
        answers.devDependencies?.includes('@sambad/eslint-config')
      ) {
        selectedDependencies.devDependencies!['@types/eslint'] = '^8.56.5';
        selectedDependencies.devDependencies!['eslint'] = '^8.57.0';

        actions.push({
          type: 'add',
          path: '{{ turbo.paths.root }}/{{ location }}/.eslintrc.js',
          templateFile: 'templates/eslintrc.hbs',
        });
      }

      if (
        answers.dependencies?.includes('@sambad/typescript-config') ||
        answers.devDependencies?.includes('@sambad/typescript-config')
      ) {
        selectedDependencies.devDependencies!['typescript'] = '^5.3.3';
        actions.push({
          type: 'add',
          path: '{{ turbo.paths.root }}/{{ location }}/tsconfig.json',
          templateFile: 'templates/tsconfig.hbs',
        });
      }

      actions.push({
        type: 'modify',
        path: '{{ turbo.paths.root }}/{{ location }}/package.json',
        transform: (fileContents) => {
          const packageJson = JSON.parse(fileContents);
          packageJson.devDependencies = {
            ...(packageJson.devDependencies || {}),
            ...selectedDependencies.devDependencies,
          };
          packageJson.dependencies = {
            ...(packageJson.dependencies || {}),
            ...selectedDependencies.dependencies,
          };
          return JSON.stringify(packageJson, null, 2);
        },
      });

      return actions;
    },
  });
};

export default generator;
