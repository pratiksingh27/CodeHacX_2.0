// import React from 'react';

const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col items-center mx-auto mb-8">
      <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full mb-2" />
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
