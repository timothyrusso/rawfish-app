import type { User } from './User';

export interface UserServiceResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
