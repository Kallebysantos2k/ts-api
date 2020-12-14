/* eslint-disable no-unused-vars */
export interface IDatabaseConfig {
  host: string,
  port: string,
  user: string,
  password: string,
  database: string,
}

export interface IDatabaseProvider {
  generateUri(config: IDatabaseConfig): string;
  connect(uri: string): Promise<void>;
  disconnect(): Promise<void>;
}
