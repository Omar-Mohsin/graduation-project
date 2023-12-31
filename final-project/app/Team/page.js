'use client';
import React from 'react';
import styled from 'styled-components';
import { LinkedIn, GitHub } from '@mui/icons-material'; // Removed extra comma
import Mohammad from '../../assert/mohammad.jpg';
import Omar from '../../assert/omar.jpeg';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Omar Mohsin',
      position: 'Software Developer Engineer at MBC-Shahid',
      image: 'http://localhost:3000/_next/static/media/omar.2144722b.jpeg',
      linkedin: 'https://www.linkedin.com/in/omar-mohsin-411434202/',
      github: 'https://github.com/Omar-Mohsin',
    },
    {
      name: 'Mohammad Alrubbi',
      position: 'Software Engineer at Nuummite',
      image: 'http://localhost:3000/_next/static/media/mohammad.79e1432f.jpg',
      linkedin: 'https://www.linkedin.com/in/mohammad-alrubbi-33b911260/',
      github: 'https://github.com/moALrubbi', // Removed extra backticks
    },
  ];
  console.log(Omar);


  return (
    <div>
      <TeamCardsContainer>
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberPosition>{member.position}</MemberPosition>
              <SocialIcons>
                <IconLink href={member.linkedin} target="_blank">
                  <LinkedIn />
                </IconLink>
                <IconLink href={member.github} target="_blank">
                  <GitHub />
                </IconLink>
              </SocialIcons>
            </MemberInfo>
          </TeamMemberCard>
        ))}
      </TeamCardsContainer>
    </div>
  );
};

export default React.memo(TeamPage);




const TeamCardsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  background-color: #f5f5f5; /* Light gray background */
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }

  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease-in-out forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const IconLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const MemberImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MemberName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const MemberPosition = styled.p`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  color: #666;
  line-height: 1.5;
  transition: margin-top 0.3s ease;
`;

