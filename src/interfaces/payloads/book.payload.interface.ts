export interface IBookPayload {
  cover?: string;
  title: string;
  author: string;
  description: string;
  year: string;
  pages: string;
  borrowed: boolean;
  borrowedTo: string;
  borrowedAt: string;
}
