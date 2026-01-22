type FlagArgumentType = "string" | "number" | "boolean";


export interface FlagProps {
  name: string;
  arguments: FlagArgumentType[];
}

export class Flag {
  name: string;
  arguments: FlagArgumentType[];
  short: string;
  long: string;

  constructor(p: FlagProps) {
    this.validateProps(p);
    this.name = p.name;
    this.arguments = p.arguments;
    this.short = this.deriveShortFlag();
    this.long = this.deriveLongFlag();
  }

  private validateProps(p: FlagProps) {
    if (p.name.length < 1) {
      throw new Error("Invalid flag name.  Flag name must be longer than 1 character");
    }
  }

  private deriveShortFlag(): string {
    return `-${this.name.charAt(0).toLowerCase()}`
  }

  private deriveLongFlag(): string {
    return `--${this.name}`
  }
}




