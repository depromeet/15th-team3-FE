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
      if (!answers) {
        return [];
      }

      return [
        {
          type: 'add',
          path: `src/{{ type }}/{{ name }}.${answers.type === 'components' ? 'tsx' : 'ts'}`,
          templateFile: `templates/${answers.type === 'components' ? 'component' : 'theme'}.hbs`,
        },
        {
          type: 'append',
          path: 'src/{{ type }}/index.ts',
          pattern: /(export {[^]*} from '[^]*';)/g,
          template: "export { {{ name }} } from './{{ name }}'",
        },
      ];
    },
  });
}
