'use client';
import React, { useState } from 'react';
import { Network, UserPlus } from "lucide-react";
import { useRouter } from 'next/navigation';

function CreateTree() {
    const router = useRouter();
    const [treeName, setTreeName] = useState('');
    const [members, setMembers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleCreateTree = (e) => {
        e.preventDefault();
        // #to be implemented from my backend
        console.log('Tree created:', { name: treeName, members });
    };

    const handleAddMember = () => {
        router.push('/add-member');
    };

    const showTreePage = () => {
        router.push('/tree-view');
    };


    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="p-8 w-full">
                        <div className="uppercase tracking-wide text-3xl text-center text-indigo-500 font-semibold mb-1">Create Your</div>
                        <h1 className="block mt-1 text-lg text-center my-2 leading-tight font-medium text-black">Family Tree</h1>
                        <form onSubmit={handleCreateTree} className="mt-6">
                            <div className="mb-4">
                                <label htmlFor="treeName" className="block text-gray-700 text-sm font-bold mb-2">
                                    Family Tree Name
                                </label>
                                <input
                                    type="text"
                                    id="treeName"
                                    value={treeName}
                                    onChange={(e) => setTreeName(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter your family tree name"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <h2 className="block text-gray-700 text-sm font-bold mb-2">Family Members</h2>
                                <ul className="bg-gray-100 rounded-lg p-2">
                                    {members.map((member, index) => (
                                        <li key={index} className="bg-white rounded p-2 mb-2 shadow">
                                            {member.name}
                                        </li>
                                    ))}
                                    {members.length === 0 && (
                                        <li className="text-gray-500 italic">No members added yet</li>
                                    )}
                                </ul>

                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    onClick={() => showTreePage()}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                                >
                                    <Network className="mr-2" />
                                    Create Family Tree
                                </button>
                                <button
                                    type="button"
                                    onClick={handleAddMember}
                                    className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                                >
                                    <UserPlus className="mr-2" />
                                    Add Member
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTree;