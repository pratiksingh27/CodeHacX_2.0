import { useState, useEffect } from 'react';
import TeamMember from './TeamMember';

// Test data for team members
const testData = [
    { id: 1, name: 'John Doe', role: 'Software Engineer', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', role: 'Product Designer', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Michael Johnson', role: 'Data Scientist', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Emily Brown', role: 'UI/UX Designer', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Alex Rodriguez', role: 'Frontend Developer', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Sarah Wilson', role: 'Backend Developer', image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'David Lee', role: 'Project Manager', image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Jennifer Taylor', role: 'Marketing Specialist', image: 'https://via.placeholder.com/150' },
  ];
  

  const TeamSection = () => {
   

    return (
        <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h1>
     
    </div>
      );
};

export default TeamSection;
