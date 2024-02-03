export interface IBook {
  id: string;
  cover: string;
  title: string;
  author: string;
  description?: string;
  year?: string;
  pages?: string;
  read: boolean;
  readDate?: string;
  borrowed: boolean;
  borrowedTo?: string;
  borrowedAt?: string;
}
