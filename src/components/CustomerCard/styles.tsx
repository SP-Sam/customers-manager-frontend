import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  width: 100%;
  max-width: 65rem;
  height: 4.375rem;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

export const StyledCardStatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8f8f8f;
`;

export const StyledCardText = styled.p`
  color: #8f8f8f;
`;

export const StyledCardTextBold = styled.p`
  color: #585858;
`;

export const StatusDot = styled.div<{ bgColor: string }>`
  width: 1rem;
  height: 1rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
`;
