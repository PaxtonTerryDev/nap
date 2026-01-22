interface CommandProps {
  cmd: string;
}

interface Command {
  cmd: string;
  flags: Flag[];
}

const command: Command = {
  cmd: "init",
  flags: [
    {
      name: "path",
      type: "string",
      description: "The path to the directory it should initialize to",
    },
    {
      name: "yes",
      type: "string",
      description: "Skip initialization questions, and prefer defaults",
    }
  ]
}

