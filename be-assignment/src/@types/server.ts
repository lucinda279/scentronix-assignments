export interface ServerSummary {
  url: string;
  priority: number;
}

export interface Server extends ServerSummary {
  online?: boolean;
}
