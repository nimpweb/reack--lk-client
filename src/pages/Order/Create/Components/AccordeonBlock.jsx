import { ArrowDropDown, ArrowDropUp, DoneAll, Help } from '@mui/icons-material';
import React, {useState} from 'react';
import styled from 'styled-components';

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FlexContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 15px;
`;

const Container = styled.div`
  border: solid 1px var(--second-color);
  padding: 20px;
  border-radius: 10px;
  background: silver;
  cursor: pointer;
`;

const Title = styled.h2`
font-size: 16px;
text-align: left;
justify-self: flex-start;
align-self: flex-start;
margin-bottom: 5px;
`;
const Description = styled.div`
  color: var(--third-color);
  font-size: 13px;
  align-self: flex-start;
`;

export default function AccordeonBlock({children, title, description, state}) {
  const [showContent, setShowContent] = useState(true);
  const handleHeaderClick = () => {
    console.log('result', showContent);
    setShowContent(!showContent);
  }
  return (
    <Container>
      <Header title={title} description={description} expanded={showContent} onClick={handleHeaderClick} />
      {showContent && children}
    </Container>
  );
}

function Header({ title, description, expanted, completed }) {
  return (
    <FlexContainerRow>
      <Icon result={completed} />
      <FlexContainerColumn>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </FlexContainerColumn>
      {expanted ? <ArrowDropDown /> : <ArrowDropUp /> }
    </FlexContainerRow>
  );
}

function Icon(result) {
  return result ? <DoneAll /> : <Help />
}