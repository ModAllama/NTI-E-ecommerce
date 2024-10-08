declare namespace NodeJS {
  interface ProcessEnv {
    readonly DBCONNECTION: string;
    readonly PORT: number;
    readonly SECRET_ROUNDS: number;
    readonly JWT_SECRET: string;
    readonly ENV: "Development" | "Production";
    readonly BACKEND_URL: string;
    readonly CLOUD_NAME: string;
    readonly API_KEY: string;
    readonly API_SECRET: string;
    readonly FRONTEND_URL: string;
  }
}
