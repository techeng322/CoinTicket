import { collection, addDoc, doc, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { Poll } from '@/lib/types';

export async function createPoll(poll: Poll): Promise<void> {
  try {
    const pollsCollection = collection(db, 'polls');
    await addDoc(pollsCollection, poll);
    console.log('Poll successfully saved!');
  } catch (error) {
    console.error('Error saving poll:', error);
  }
}

export async function updatePoll(id: string, updatedPoll: Partial<Poll>): Promise<void> {
  try {
    const pollRef = doc(db, 'polls', id);
    await updateDoc(pollRef, updatedPoll);
    console.log('Poll successfully updated!');
  } catch (error) {
    console.error('Error updating poll:', error);
  }
}

export async function getPolls(): Promise<object[]> {
  try {
    const pollCollection = collection(db, 'polls');
    const pollSnapshot = await getDocs(pollCollection);
    const polls = pollSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return polls;
  } catch (error) {
    console.error('Error updating poll:', error);
    return []
  }
}

export async function deletePoll(id: string): Promise<void> {
  try {
    const pollDoc = doc(db, 'polls', id);
    await deleteDoc(pollDoc);
    console.log(`Poll with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error('Error deleting poll:', error);
    throw new Error('Failed to delete poll');
  }
}
