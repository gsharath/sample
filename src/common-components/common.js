import styled from 'styled-components';

export const InputFormControl = styled.input`
  border-radius: 4px !important;
  padding: 4px;
  margin: 4px;
`;

export const BaseButton = styled.button`
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
`;

export const StyledPrimaryButton = styled(BaseButton)`
  background-color: green;
  color: white;
`;

export const StyledSecondaryButton = styled(BaseButton)`
  background-color: white;
  color: black;
`;

export const FlexItem = styled.div`
    display: flex;
`;

export const ColumnFlexItem = styled(FlexItem)`
flex-direction: column;
`
export const RowFlexItem = styled(FlexItem)`
flex-direction: row;
`

export const StyledForm=styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
    width:100%;
    justify-content:center;
`;


export const StyledError=styled(FlexItem)`
    font-size: 12px;
    color: red;
`