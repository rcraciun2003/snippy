'use client'


interface UserItemProps {
    expand: boolean;
  }

export default function UserItem({ expand }: UserItemProps) {
    
    return (
      <div className="flex flex-col items-center justify-center gap-2 border rounded-[8px] p-2">
      {expand ? (
  <div className="flex flex-row p-2 gap-2">
    <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
      <p>CR</p>
    </div>
    <div>
      <p className="text-[16px] font-bold">Craciun Razvan</p>
      <p className="text-[12px] text-neutral-500">craciunrazvan.web@gmail.com</p>
    </div>
  </div>
) : (
  <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
    <p>CR</p>
  </div>
)}
        </div>
      );
    }