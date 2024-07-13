import { readJSONSync } from 'fs-extra';
import path from 'path';

type AbsoluteWorkspaceSource = string;

const ROOT_PROJECT_PATH = process.cwd();

export const getWorkspaceList = async () => {
  const { globby } = await import('globby');

  const packagesSources = await globby(['packages/*/*/package.json', 'packages/*/package.json']);
  if (packagesSources.length > 0) {
    const workspaceList = packagesSources.map((source) => {
      const packageJsonSource = path.resolve(ROOT_PROJECT_PATH, source);

      const name = getWorkspacePackageName(packageJsonSource);

      return name;
    });
    return workspaceList;
  }

  return [];
};

export const getWorkspacePackageName = (source: AbsoluteWorkspaceSource) => {
  try {
    const packageJson = readJSONSync(source);
    if (!packageJson || !packageJson.name) {
      throw new Error(`Package name not found in ${source}`);
    }
    return packageJson.name;
  } catch (error) {
    console.log(error.message);
  }
};
