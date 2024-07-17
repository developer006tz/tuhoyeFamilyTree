'use client';
import React, { useEffect, useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
  padding: 10px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledTreeNode = styled(TreeNode)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberCard = styled.div`
  padding: 10px;
  border-radius: 8px;
  background-color: #f0f4f8;
  border: 1px solid #d1d5db;
  text-align: center;
  min-width: 150px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #1f2937;
`;

const Relation = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #4b5563;
`;

const DateOfBirth = styled.p`
  margin: 0;
  font-size: 12px;
  color: #6b7280;
`;

function TreeView({ members, onAddMember }) {
    const [treeData, setTreeData] = useState(null);

    useEffect(() => {
        const fetchTreeData = async () => {
            try {
                const response = await fetch('/mock/mock-tree.json');
                const data = await response.json();
                setTreeData(data);
            } catch (error) {
                console.error('Error fetching tree data:', error);
            }
        };

        fetchTreeData();
    }, []);

    const renderTreeNodes = (node) => (
        <StyledTreeNode
            label={
                <MemberCard>
                    <Name>{node.name}</Name>
                    <Relation>{node.relation}</Relation>
                    <DateOfBirth>{node.dateOfBirth}</DateOfBirth>
                </MemberCard>
            }
        >
            {node.children && node.children.map((child) => renderTreeNodes(child))}
        </StyledTreeNode>
    );

    if (!treeData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-8  min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                {treeData.familyName} Family Tree
            </h1>
            <div className="overflow-auto">
                <Tree
                    lineWidth={'2px'}
                    lineColor={'#8b5cf6'}
                    lineBorderRadius={'10px'}
                    label={
                        <StyledNode>
                            <Name>{treeData.tree[0].name}</Name>
                            <Relation>{treeData.tree[0].relation}</Relation>
                        </StyledNode>
                    }
                >
                    {treeData.tree[0].children && treeData.tree[0].children.map((child) => renderTreeNodes(child))}
                </Tree>
            </div>
            <button
                onClick={onAddMember}
                className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
                Add New Member
            </button>
        </div>
    );
}

export default TreeView;