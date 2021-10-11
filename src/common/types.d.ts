export {};
/** Global Types that you don't want to explicitely import */

declare global {
  type Environment = "LOCAL" | "DEV" | "UAT" | "PROD";

  interface LookupValue {
    id: string;
    text: string;
  }

  type Role = "admin" | "user";

  interface User {
    id: string;
    name: string;
    role?: Role;
    isImpersonation: boolean;
  }
}
