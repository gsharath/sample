import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FlexItem, RowFlexItem } from '../../common-components/common';
import { Header } from '../../common-components/Header';
import { AddUser } from './AddUser';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../login/Login.action';
import { UsersList } from './UsersList';
import { getAllUsers } from './UsersList.service';

const StyledFlexItem = styled(FlexItem)(props => ({
    background: props.background || 'white',
    flex: props.flex || 1
}));

const StyledRowFlexItem = styled(RowFlexItem)`
padding:16px;
`

export function Users() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginInfo = useSelector(
        (state) => state.currentLogin?.loginInfo
    );
    const [usersData, setUsersData] = useState([]);

    const onLogoutclick = useCallback(() => {
        dispatch(logout());
        navigate('/');
    }, [dispatch, navigate]);

    const deleteUser = useCallback((data) => {
        setUsersData(_userData => _userData.filter(p => p.id !== data.id));
    }, [setUsersData]);

    const addUser = useCallback((data) => {
        const newItem = {
            id: Date.now(),
            branchId: data.branchId,
            userName: data.userName,
            name: `${data.firstName} ${data.middleName?.length > 0 ? data.middleName[0] : ''} ${data.lastName}`,
            position: data.position,
        };

        setUsersData(_userData => _userData.concat(newItem));
    }, [setUsersData]);

    useEffect(() => {
        if (!loginInfo) {
            onLogoutclick();
        }
        const a = getAllUsers();
        setUsersData(a);
    }, [loginInfo, onLogoutclick]);

    return (
        <>{
            loginInfo && (<>
                <Header onClick={onLogoutclick} />
                <StyledRowFlexItem>
                    <StyledFlexItem background={'#c7c7c7'} flex={1}>
                        <AddUser addUser={addUser} />
                    </StyledFlexItem>
                    <StyledFlexItem flex={3}>
                        <UsersList usersData={usersData} deleteUser={deleteUser} />
                    </StyledFlexItem>
                </StyledRowFlexItem></>)
        }
        </>
    )
};