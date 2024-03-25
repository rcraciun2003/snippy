import { useState } from 'react';
import { Button } from './ui/button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  code: string;
  onDelete: () => void;
}

export default function Modal({
  isVisible,
  onClose,
  code,
  onDelete,
}: ModalProps) {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target && target.id === 'wrapper') onClose();
  };

  const handleConfirmDelete = async () => {
    try {
      await onDelete();
    } catch (err) {
      console.error('Error deleting snippet:', err);
    }
  };

  return (
    <div
      id='wrapper'
      className='fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center'
      onClick={handleClose}
    >
      <div className='w-[800px] flex flex-col items-center justify-center'>
        <div className='bg-white p-2 rounded-xl'>
          <div className='text-black text-lg flex justify-end'>
            <button onClick={() => onClose()}>X</button>
          </div>
          <div className='p-4  min-w-[25rem] overflow-hidden'>
            <SyntaxHighlighter
              language='javascript'
              style={atomOneDark}
              showLineNumbers
              customStyle={{ padding: '1rem', borderRadius: '10px' }}
              wrapLongLines={true}
            >
              {code}
            </SyntaxHighlighter>
          </div>
          <div className='flex flex-row p-2 gap-2'>
            <Button>Edit</Button>
            <Button>
              <Dialog>
                <DialogTrigger>Delete</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Delete Snippet</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete this snippet?
                    </DialogDescription>
                  </DialogHeader>
                  <div className='p-2'>
                    <DialogFooter>
                      <Button onClick={onClose} variant='secondary'>
                        Cancel
                      </Button>
                      <Button
                        onClick={handleConfirmDelete}
                        variant='destructive'
                      >
                        Delete
                      </Button>
                    </DialogFooter>
                  </div>
                </DialogContent>
              </Dialog>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
