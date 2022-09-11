import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {timeSince} from './utility-functions';

export const FlexItem = styled.div`
    display: flex;
`;

export const ColumnFlexItem = styled(FlexItem)`
flex-direction: column;
`
export const RowFlexItem = styled(FlexItem)`
flex-direction: row;
`
export const Wrapper = styled(ColumnFlexItem)`
padding:8px;
`
export const Card = styled(FlexItem)`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: white;
  margin: 4px;
  width: 200px;
  > .data{
    margin: 4px;
  }
  > .card-footer {
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-top: auto;
  }
`
export const CenteredCard = styled(Card)`
align-items: center;
justify-content: center;
`
export const StyledColumnCard = styled(Card)`
flex-direction: column`

const DataDisplayer = styled(FlexItem)`
align-items: center;
    gap: 8px;
    > .text{
      color: #a8a2a2;
      font-weight: 600;
    }
`

export function TimeAgo({ time }) {
  const t = timeSince(time);
  return (
    <DataDisplayer>
      <FontAwesomeIcon icon="fa-solid fa-clock" size={'xs'} />
      <span className={'text'}>{t}</span>
    </DataDisplayer>
  )
};

function getStatus(status){
  const allStatus = {
    'optimised': {text: 'Results Optimised', color: 'blue'},
    'incomplete': {text: 'Unoptmised', color: 'orange'},
    'error':{text: 'Failed', color: 'red'}, 
    'notdefined':{text: 'Not Defined', color: 'yellow'}
  }
  return allStatus[status] ?? status['notdefined'];
}

export function StatusDisplayer({ status }) {
  const mappedStatus = getStatus(status);
  return (
    <DataDisplayer>
      <FontAwesomeIcon icon="fa-solid fa-circle" size={'xs'} color={mappedStatus.color}/>
      <span className={'text'}>{mappedStatus.text}</span>
    </DataDisplayer>
  )
}