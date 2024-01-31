export interface IBook {
  id: string;
  cover: string;
  title: string;
  author: string;
  description?: string;
  year?: number;
  pages?: number;
  read: boolean;
  readDate?: Date;
  borrowed: boolean;
  borrowedTo?: string;
  borrowedAt?: Date;
}
