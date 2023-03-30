import { EOL } from "os";

export function useDatabase(
    databaseName
) {
    const commands = [
        `USE \`${databaseName}\`;`
      ];
    
      return commands.join(EOL);
}
