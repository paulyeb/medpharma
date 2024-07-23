const esprima = require('esprima');
const fs = require('fs');

const file = fs.readFileSync('src/components/icons/Icons.tsx', 'utf8');

const tree = esprima.parseModule(file, { jsx: true, tolerant: true, tokens: true });

const names = tree.body
  .map((el: any) => {
    if (el.type === 'ExportNamedDeclaration') {
      return el.declaration.declarations[0].id.name;
    }
    return null;
  })
  .filter((a: any) => a !== null);

const output = `// This file was automatically generated and should not be edited.
// To update this file run "yarn run generate-icons-type"

export type IconName =\n  | '${names.join("'\n  | '")}';\n`;

fs.writeFileSync('src/components/icons/types.ts', output);
