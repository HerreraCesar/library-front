export interface IBookResponse {
  id: string;
  year?: string;
  author?: string;
  title?: string;
  read?: boolean;
  readDate?: string;
  cover?: string;
  pages?: string;
  description?: string;
  borrowed?: boolean;
  borrowedTo?: string;
  borrowedAt?: string;
}
