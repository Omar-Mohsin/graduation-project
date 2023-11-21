'use client'
import React from 'react';
import styled from 'styled-components';


const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Omar Mohsin',
      position: 'Software Developer Engineer Intern at MBC-Shahid',
      image: 'https://picsum.photos/200/300',
    },
    {
      name: 'Mohammad Alrubbi',
      position: 'Softawre Engineer at Nuummite ',
      image: 'https://picsum.photos/200/301',
    },
  ];

  return (
    <div>
      <TeamCardsContainer>
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberPosition>{member.position}</MemberPosition>
            </MemberInfo>
          </TeamMemberCard>
        ))}
      </TeamCardsContainer>
    </div>
  );
};

export default TeamPage;

const TeamCardsContainer = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  width: 400px;

`;

const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
`;

const MemberInfo = styled.div`
  flex: 1;
`;

const MemberName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const MemberPosition = styled.p`
  font-size: 16px;
`;