import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('sds-template', {
    description: 'Adds a new sds',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Enter component or theme:',
        choices: [
          {
            name: 'components',
            value: 'components',
          },
          {
            name: 'theme',
            value: 'theme',
          },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: (answers) => `What is the name of the ${answers.type}?`,
        validate: (value: string) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'name is required';
        },
      },
    ],
    actions: (answers) => {
      if (!answers) return [];

      switch (answers.type) {
        case 'components':
          return componentsActions;
        case 'theme':
          return themeActions;
        default:
          return [];
      }
    },
  });
}

const componentsActions = [
  {
    type: 'add',
    path: `src/{{ type }}/{{ name }}/{{ name }}.tsx`,
    templateFile: `templates/component.hbs`,
  },
  {
    type: 'add',
    path: `src/{{ type }}/{{ name }}/index.ts`,
    template: "export { {{ pascalCase name }} } from './{{ name }}'",
  },
  { type: 'add', path: `src/{{ type }}/{{ name }}/styles.ts` },
  {
    type: 'modify',
    path: 'src/{{ type }}/index.ts',
    pattern: /$(?![\s\S])/g,
    template: "$&export * from './{{ name }}';\n",
  },
];

const themeActions = [
  {
    type: 'add',
    path: `src/{{ type }}/{{ name }}.ts`,
    templateFile: `templates/theme.hbs`,
  },
  {
    type: 'modify',
    path: 'src/{{ type }}/index.ts',
    pattern: /$(?![\s\S])/g,
    template: "export { {{ name }} } from './{{ name }}';\n",
  },
];
