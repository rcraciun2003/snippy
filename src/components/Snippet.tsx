import React, { useState, useEffect } from 'react';
import { apiService } from '../services/ApiServices'; // Adjust the path as necessary
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import Modal from './Modal';
import { Toaster } from 'sonner';

interface Snippet {
  id: string;
  title: string;
  description: string;
  code: string;
}

interface ShowCodeState {
  [key: string]: boolean;
}

export default function Snippet() {
  const [snippets, setSnippets] = useState<Snippet[]>([]); // State to store fetched snippets
  const [showCode, setShowCode] = useState<ShowCodeState>({}); // Initialize with empty object
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    async function loadSnippets() {
      try {
        const response = await apiService.getSnippets();
        if (response.data) {
          setSnippets(response.data); // Set the 'data' part of the response to your state
        }
      } catch (error) {
        console.error('Error fetching snippets:', error);
      }
    }

    loadSnippets();
  }, []);

  const toggleShowCode = (snippetId: string) => {
    setShowCode(prevState => ({
      ...prevState,
      [snippetId]: !prevState[snippetId],
    }));
  };

  const handleDeleteSnippet = async (snippetId: string) => {
    try {
      await apiService.deleteSnippet(snippetId);
      console.log('Snippet deleted successfully with id:', snippetId);
      setSnippets(prevState =>
        prevState.filter(snippet => snippet.id !== snippetId)
      );
      setDeleteSuccess(true);
    } catch (error) {
      console.error('Error deleting snippet:', error);
    }
  };

  const cards = snippets.map((snippet: Snippet) => (
    <Card key={snippet.id} className='2xl:min-w-[300px] lg:min-w-[200px]'>
      <CardHeader>
        <CardTitle className='flex flex-row justify-between gap-4'>
          {snippet.title}
        </CardTitle>
        <CardDescription>{snippet.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <React.Fragment>
          <Button
            className='bg-red-800 text-xs hover:bg-red-900 text-white font-bold p-2 rounded mb-2'
            onClick={() => toggleShowCode(snippet.id)}
          >
            Show the Code
          </Button>

          <Modal
            isVisible={showCode[snippet.id] || false}
            onClose={() =>
              setShowCode(prevState => ({ ...prevState, [snippet.id]: false }))
            }
            onDelete={() => handleDeleteSnippet(snippet.id)}
            code={snippet.code}
          />
        </React.Fragment>
        {/* Add the tags HERE (remind to create new field on database) */}
      </CardContent>
    </Card>
  ));

  // Render the prepared list of components
  return (
    <div>
      <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 h-auto max-w-screen-2xl 2xl:p-8 px-2 py-8 overflow-x-auto justify-between gap-8 top-0 mx-auto'>
        {cards}
      </div>
    </div>
  );
}
