import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { CircleCheckBig, ListChecks, NotebookPen, Projector, SquareDashedBottomCode } from "lucide-react"
import React from "react";
  
export default function CardsMain() {

    const cardList = [
        {
        items: [
            {
                title: 'Snippets Created',
                value: `13`,
                descValue: '2.5%',
                desc: 'Since last month',
                icon: <SquareDashedBottomCode />,
            },
            {
                title: 'Notes Created',
                value: '13',
                descValue: '2.5%',
                desc: 'Since last month',
                icon: <NotebookPen />,
            },
            {
                title: 'Active Tasks',
                value: '13',
                descValue: '2.5%',
                desc: 'Since last month',
                icon: <ListChecks />,
            },
            {
                title: 'Finished Tasks',
                value: '13',
                descValue: '2.5%',
                desc: 'Since last month',
                icon: <CircleCheckBig />,
            }
        ]
    },
    ];


return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-auto max-w-screen-2xl 2xl:p-8 px-2 py-8 overflow-x-auto justify-between gap-8 top-0 mx-auto">
{cardList.map((column: any, columnKey: number) => (
    <React.Fragment key={columnKey}>
    {column.items.map((card: any, cardKey: number) => (
    <Card key={cardKey} className="2xl:min-w-[300px] lg:min-w-[200px] ">
    <CardHeader>
        <CardTitle className="flex flex-row justify-between gap-4">{card.title} {card.icon}</CardTitle>
    </CardHeader>
        <CardContent>
        <div className="text-2xl font-bold">
        {card.value}
        </div>
        <CardDescription>{card.descValue} {card.desc}</CardDescription>
        </CardContent>
    </Card>
    ))}
    </React.Fragment>
))}
</div>
}
