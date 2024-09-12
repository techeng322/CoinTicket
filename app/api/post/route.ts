import { NextResponse } from 'next/server';
import { createPost, deletePost, getPosts, updatePost } from '@/lib/firebase/postService';
import { Post } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const post: Post = await request.json();
    await createPost(post);
    return NextResponse.json({ message: 'Poll created successfully!' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create poll' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, title, content } = body
    const updatedPoll: Partial<Post> = { title, content }

    if (!id) {
      return NextResponse.json({ error: 'Poll ID is required' }, { status: 400 });
    }

    await updatePost(id, updatedPoll);
    return NextResponse.json({ message: 'Poll updated successfully!' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update poll' }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const polls = await getPosts();
    return NextResponse.json({ polls }, { status: 201 });
  } catch (error) {
    console.error('Error fetching polls:', error);
    throw new Error('Failed to fetch polls');
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json()

    if (!id) {
      return NextResponse.json({ error: 'Poll ID is required' }, { status: 400 });
    }

    // Call the function to delete the poll from Firestore
    await deletePost(id);

    return NextResponse.json({ message: 'Poll deleted successfully!' });
  } catch (error) {
    console.error('Error deleting poll:', error);
    return NextResponse.json({ error: 'Failed to delete poll' }, { status: 500 });
  }
}