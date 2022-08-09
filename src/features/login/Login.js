import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { InputFormControl, StyledPrimaryButton, FlexItem, ColumnFlexItem, StyledForm, StyledError } from '../../common-components/common';
import styled from 'styled-components';
import { checkLogin } from './Login.action';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(ColumnFlexItem)`
    display: flex;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100vw;
`;

const LoginWrapper = styled(ColumnFlexItem)`
    align-self: center;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    border: 1px solid rgb(197, 204, 209);
    box-shadow: rgb(0 0 0 / 20%) 0px 6px 16px;
    height: 200px;
    width: 250px;
    padding: 48px;
`

const Title=styled(FlexItem)`
    font-size: 16px;
    justify-content:center;
`

export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState();
    const handleSubmit = useCallback(async (a)=>{
            const resp = await dispatch(checkLogin(a));
            if(resp){
                navigate('/users');
            }
            else{
                setLoginError('Please verify your login details');
            }
        },[dispatch, navigate]);
    return (
        <StyledContainer>
            <LoginWrapper>
                <Title>
                    Login
                </Title>
                <FlexItem>
                    <Formik
                        initialValues={{ branchId: '', userName: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.branchId) {
                                errors.branchId = 'Branch id required';
                            }
                            if (!values.userName) {
                                errors.userName = 'User name required';
                            }
                            if (!values.password) {
                                errors.password = 'Password required';
                            }

                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <><StyledForm onSubmit={handleSubmit}>

                                <InputFormControl
                                    type="number"
                                    name="branchId"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.branchId}
                                    placeholder={'Branch id'}
                                />
                                {errors.branchId && touched.branchId && errors.branchId}
                                <InputFormControl
                                    type="text"
                                    name="userName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userName}
                                    placeholder={'User name'}

                                />
                                {errors.userName && touched.userName && errors.userName}
                                <InputFormControl
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder={'Password'}
                                />
                                {errors.password && touched.password && errors.password}
                                <StyledPrimaryButton type="submit" disabled={isSubmitting}>
                                    Login
                                </StyledPrimaryButton>
                                <StyledError>
                                    {loginError}
                                </StyledError>
                            </StyledForm>
                            </>
                        )}
                    </Formik>
                </FlexItem>
            </LoginWrapper>
        </StyledContainer>
    );
}
