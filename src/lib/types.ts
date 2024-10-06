export interface TGUserData {
  id: number;
  first_name: string;
  last_name?: string;
  username: string;
  language_code: string;
  is_premium?: boolean;
}