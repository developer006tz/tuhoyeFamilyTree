import React from 'react';

const MembersList = ({ members, onEditMember, onDeleteMember }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Family Members</h2>
      {members.length === 0 ? (
        <p className="text-gray-600">No members added yet.</p>
      ) : (
        <ul className="space-y-4">
          {members.map((member, index) => (
            <li key={index} className="bg-gray-50 p-4 rounded-md flex justify-between items-center">
              <div>
                <span className="font-semibold">{member.firstName} {member.lastName}</span>
                <p className="text-sm text-gray-600">
                  {member.gender} | Born: {member.birthDate}
                </p>
              </div>
              <div>
                <button
                  onClick={() => onEditMember(index, {...member})}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteMember(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MembersList;