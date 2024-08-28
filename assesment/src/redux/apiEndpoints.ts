import { BlogType } from "@/types/blog";

export async function fetchBlogsAPI(): Promise<BlogType[]> {
    const response = await fetch('./data/data.json');
    console.log(response) // Path relative to the public directory
    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return response.json();
}