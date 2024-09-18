import { collection, addDoc, doc, updateDoc, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/clientApp'
import { Post } from '@/lib/types'

export async function createPost(post: Post): Promise<void> {
  try {
    const postsCollection = collection(db, 'posts')
    await addDoc(postsCollection, post)
    console.log('post successfully saved!')
  } catch (error) {
    console.error('Error saving post:', error)
  }
}

export async function updatePost(id: string, updatedPost: Partial<Post>): Promise<void> {
  try {
    const postRef = doc(db, 'posts', id)
    await updateDoc(postRef, updatedPost)
    console.log('Post successfully updated!')
  } catch (error) {
    console.error('Error updating post:', error)
  }
}

export async function getPosts(): Promise<object[]> {
  try {
    const postCollection = collection(db, 'posts')
    const postSnapshot = await getDocs(postCollection)
    const posts = postSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return posts
  } catch (error) {
    console.error('Error updating post:', error)
    return []
  }
}

export async function deletePost(id: string): Promise<void> {
  try {
    const postDoc = doc(db, 'post3s', id)
    await deleteDoc(postDoc)
    console.log(`Post with ID ${id} deleted successfully.`)
  } catch (error) {
    console.error('Error deleting post:', error)
    throw new Error('Failed to delete post')
  }
}
