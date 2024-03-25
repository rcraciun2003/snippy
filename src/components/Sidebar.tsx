'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import UserItem from './UserItem';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  ListChecks,
  LogOut,
  NotebookPen,
  Settings,
  SquareDashedBottomCode,
  User,
} from 'lucide-react';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setExpanded(window.innerWidth >= 800); // Set your desired breakpoint
    };

    // Initial call to handleResize
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          icon: <Home />,
          text: 'Dashboard',
        },
        {
          link: '/snippets',
          icon: <SquareDashedBottomCode />,
          text: 'Snippets',
        },
        {
          link: '/',
          icon: <NotebookPen />,
          text: 'Notes',
        },
        {
          link: '/',
          icon: <ListChecks />,
          text: 'Tasks',
        },
      ],
    },
    {
      group: 'Account',
      items: [
        {
          link: '/',
          icon: <User />,
          text: 'Profile',
        },
        {
          link: '/',
          icon: <Settings />,
          text: 'Settings',
        },
        {
          link: '/',
          icon: <LogOut />,
          text: 'Logout',
        },
      ],
    },
  ];

  return (
    <div className={`flex flex-col top-0 left-0`}>
      <aside
        className={`max-w-[300px] flex flex-col gap-4 border-r border-b rounded-lg min-h-screen p-4 transition-all w-auto ${
          expanded ? '' : ''
        }`}
      >
        <div
          className={`flex flex-row items-center justify-between overflow-hidden mt-4  ${
            expanded ? '' : 'flex flex-col'
          }`}
        >
          <Image
            className={`m-0 p-2 ${expanded ? '' : 'hidden'}`}
            src={'/expanded-logo.png'}
            width={100}
            height={100}
            alt='logo'
          />
          <button
            onClick={handleClick}
            className={`p-2 rounded-lg bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 hover:text-white ${
              expanded ? '' : 'items-center justify-center'
            }`}
          >
            {expanded ? <ArrowLeft /> : <ArrowRight />}
          </button>
        </div>
        <div
          className={`grow sm:p-2 p-4 overflow-hidden  ${
            expanded ? '' : 'w-[70px]'
          }`}
        >
          <ul>
            {menuList.map((menu: any, key: any) => (
              <p
                className={`transition-all ${
                  expanded
                    ? 'mt-2'
                    : 'flex flex-col items-center justify-center p-2 text-dark '
                }`}
                key={key}
              >
                {expanded ? menu.group : ''}
                {menu.items.map((option: any, optionkey: any) => (
                  <React.Fragment key={optionkey}>
                    {expanded ? (
                      <li
                        key={optionkey}
                        className='flex items-center p-4 bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 rounded-lg  mt-2 text-gray-600 hover:text-white'
                      >
                        <Link
                          className='flex items-center space-x-4'
                          href={`${option.link}`}
                        >
                          {option.icon}
                          <span
                            className={`text-sm font-medium transition-all ${
                              expanded ? '' : 'hidden'
                            }`}
                          >
                            {option.text}
                          </span>
                        </Link>
                      </li>
                    ) : (
                      <TooltipProvider key={optionkey}>
                        <Tooltip>
                          <TooltipTrigger>
                            <li
                              key={optionkey}
                              className='flex items-center p-6 bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 rounded-lg w-auto hover:text-white'
                            >
                              <Link
                                className='flex items-center space-x-4'
                                href={`${option.link}`}
                              >
                                {option.icon}
                                <span
                                  className={`text-sm font-medium transition-all ${
                                    expanded ? '' : 'hidden'
                                  }`}
                                >
                                  {option.text}
                                </span>
                              </Link>
                            </li>
                          </TooltipTrigger>
                          <TooltipContent side='right'>
                            {option.text}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </React.Fragment>
                ))}
              </p>
            ))}
          </ul>
        </div>
        <div className={`flex-2 items-center justify-center`}>
          {expanded ? (
            <UserItem expand={expanded} />
          ) : (
            <UserItem expand={false} />
          )}
        </div>
      </aside>
    </div>
  );
}
