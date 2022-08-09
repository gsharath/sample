import React, { useCallback, } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlexItem, StyledPrimaryButton } from './common';

const RightItem = styled(FlexItem)`
  margin-left: auto;
`
const CenterFlexItem = styled(FlexItem)`
    margin-left: auto;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
`

export function Header({onClick}) {
    const loginInfo = useSelector(
        (state) => state.currentLogin?.loginInfo
    );
    const onLogoutClick = useCallback(()=>{
        onClick();
    }, [onClick])
    return (
        <CenterFlexItem>
            <FlexItem>
                Welcome {loginInfo?.userName}
            </FlexItem>
            <RightItem>
                <StyledPrimaryButton onClick={onLogoutClick}>Logout</StyledPrimaryButton>
            </RightItem>
        </CenterFlexItem>
    )
};