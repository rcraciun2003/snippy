import React from "react";
  
export default function HeaderPages({currentPage}: {currentPage: string}) {

    interface Page {
        title: string;
        active: boolean;
    }

    const pagesList = [
        {
            title: 'Dashboard',
            active: currentPage === 'Dashboard'
        },
        {
            title: 'Snippets',
            active: currentPage === 'Snippets'
        },
        {
            title: 'Notes',
            active: currentPage === 'Notes'
        },
        {
            title: 'Tasks',
            active: currentPage === 'Tasks'
        }
    ]

    const activePage = pagesList.find(page => page.active);

    return (
    <div className="w-full bg-white h-20 border-b shadow-sm">
            <h1 className="flex items-center p-6 text-2xl font-bold">{activePage?.title}</h1>
        <h1></h1>
    </div>
)
}
