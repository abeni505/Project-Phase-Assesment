// src/types/types.ts

export interface Author {
  _id: string;
  name: string; // Assuming the name should be fetched separately or used as a reference
  email?: string;
  image: string;
  role: string;
}

// src/types/types.ts
export interface BlogType {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: string; // Adjust if you get a full author object
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
}
