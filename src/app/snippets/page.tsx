'use client';

import HeaderPages from '@/components/ui/HeaderPages';
import { Button } from '@/components/ui/button';
import useSWR from 'swr';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import Snippet from '@/components/Snippet';

export default function Snippets() {
  const currentPage = 'Snippets';
  const { data: snippets } = useSWR('/api/snippets');
  return (
    <>
      <HeaderPages currentPage={currentPage} />
      <main className='min-h-full w-full'>
        <div className='bg-white w-full h-full'>
          <h1 className='flex items-center justify-center p-8 text-2xl font-semibold text-gray-700'>
            Snippets List
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 w-full justify-between items-center h-24 px-12 my-4'>
            <div className='flex p-2 justify-center md:justify-start text-center'>
              Search Component
            </div>
            <div className='flex justify-center md:justify-end'>
              <Button>Create Snippet</Button>
            </div>
          </div>
          <div className='bg-gray-100 mx-4 rounded-lg border'>
            <div className='flex flex-wrap w-full h-full items-center justify-center px-10 gap-2 py-4'>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </div>
            <div className='flex flex-col w-full h-full justify-between md:px-10 mt-10'>
              <div>
                <Snippet />
              </div>
            </div>
            <div className='w-full flex items-center justify-center p-5'>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href='#' />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#'>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href='#' />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
