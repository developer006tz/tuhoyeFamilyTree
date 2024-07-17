'use client';
import React, { useState, useEffect } from 'react';
import MembersList from './_components/MembersList';
import { useRouter } from 'next/navigation';

export default function FamilyTree() {
  const router = useRouter()
  const [treeCreated, setTreeCreated] = useState(false);
  const [members, setMembers] = useState([]);
  



  // Mock data
  const mockMembers = [
    { firstName: 'John', lastName: 'Doe', gender: 'Male', birthDate: '1980-05-15' },
    { firstName: 'Jane', lastName: 'Doe', gender: 'Female', birthDate: '1982-08-22' },
    { firstName: 'Mike', lastName: 'Doe', gender: 'Male', birthDate: '2005-03-10' },
    { firstName: 'Emily', lastName: 'Doe', gender: 'Female', birthDate: '2007-11-30' },
    { firstName: 'Robert', lastName: 'Smith', gender: 'Male', birthDate: '1955-12-03' },
  ];

  useEffect(() => {
    if (treeCreated && members.length === 0) {
      setMembers(mockMembers);
    }
  }, [treeCreated]);

  const handleCreateTree = () => {
    router.push('/create-tree');
  };


  const handleEditMember = (index, updatedMember) => {
    const updatedMembers = [...members];
    updatedMembers[index] = updatedMember;
    setMembers(updatedMembers);
  };

  const handleDeleteMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen ">
      <div className='flex flex-col justify-center items-center'>
        {!treeCreated ? (
          <div className="text-center">
            <h1 className='text-4xl font-bold mb-8 text-gray-800'>No Tree yet</h1>
            <button
              className="bg-gray-500 hover:bg-orange-600 rounded-full px-8 py-3 text-white font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              onClick={handleCreateTree}
            >
              Create Tree
            </button>
          </div>
        ) : (
          <div className="w-full max-w-4xl">
            <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>Family Tree</h1>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Add New Member</h2>
              
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}


