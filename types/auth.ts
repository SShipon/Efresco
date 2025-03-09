import { User } from "next-auth";

export interface CustomUser extends User {
  accessToken: string;
}
