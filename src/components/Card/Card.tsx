import React from 'react';

interface CardProps {
  title: string;
  name: string;
  date: string;
  time: string;
  avatarUrl: string;
}

const Card: React.FC<CardProps> = ({ title, name, date, time, avatarUrl }) => {
  return (
    <div
      className="bg-white w-[230px] h-[150px] rounded-lg shadow-md p-4 flex flex-col"
      style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Title */}
      <h3 className="text-[#5F6B88] text-sm font-medium mb-3">{title}</h3>

      {/* Avatar and Details */}
      <div className="flex items-center">
        {/* Avatar */}
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-10 h-10 rounded-full mt-9 mr-3"
        />
        {/* Name and Date/Time */}
        <div className="flex flex-col">
          <p className="text-[#5F6B88] text-base font-medium leading-5 mt-9 mb-1">{name}</p>
          <p className="text-[#5F6B88] text-sm whitespace-nowrap leading-4">
            {date} {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
