const esprima = require('esprima');
const fs = require('fs');
const file = fs.readFileSync('src/components/icons/Icons.tsx', 'utf8');
const tree = esprima.parseModule(file, { jsx: true, tolerant: true, tokens: true });
const names = tree.body
    .map((el) => {
    if (el.type === 'ExportNamedDeclaration') {
        return el.declaration.declarations[0].id.name;
    }
    return null;
})
    .filter((a) => a !== null);
const output = `// This file was automatically generated and should not be edited.
// To update this file run "yarn run generate-icons-type"

export type IconName =\n  | '${names.join("'\n  | '")}';\n`;
fs.writeFileSync('src/components/icons/types.ts', output);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVJY29uVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZW5lcmF0ZUljb25UeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbkMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsZ0NBQWdDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFdkUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFFcEYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUk7S0FDcEIsR0FBRyxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7SUFDZixJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssd0JBQXdCLEVBQUUsQ0FBQztRQUN6QyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDaEQsQ0FBQztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0tBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7QUFFbEMsTUFBTSxNQUFNLEdBQUc7OzsrQkFHZ0IsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0FBRTVELEVBQUUsQ0FBQyxhQUFhLENBQUMsK0JBQStCLEVBQUUsTUFBTSxDQUFDLENBQUMifQ==