import React, { useCallback, } from 'react';
import { Formik } from 'formik';
import { InputFormControl, StyledPrimaryButton,  StyledForm, StyledSecondaryButton, RowFlexItem } from '../../common-components/common';

export function AddUser({addUser}) {
    const handleSubmit = useCallback(async (a, { resetForm }) => {
        addUser(a);
        resetForm();
    }, [addUser]);
    return (
        <>
            <Formik
                initialValues={{ branchId: '', userName: '', password: '', firstName:'', middleName:'', lastName:'', position:'' }}
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
                    if (!values.firstName) {
                        errors.firstName = 'First name required';
                    }
                    if (!values.middleName) {
                        errors.middleName = 'Middle name required';
                    }
                    if (!values.lastName) {
                        errors.lastName = 'Last name required';
                    }
                    if (!values.position) {
                        errors.position = 'Position required';
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
                    handleReset,
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
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            placeholder={'First Name'}
                        />
                        {errors.firstName && touched.firstName && errors.firstName}
                        <InputFormControl
                            type="text"
                            name="middleName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.middleName}
                            placeholder={'Middle Name'}
                        />
                        {errors.middleName && touched.middleName && errors.middleName}
                        <InputFormControl
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            placeholder={'Last Name'}
                        />
                        {errors.lastName && touched.lastName && errors.lastName}
                        <InputFormControl
                            type="text"
                            name="position"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.position}
                            placeholder={'Position'}
                        />
                        {errors.position && touched.position && errors.position}
                        <InputFormControl
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder={'Password'}
                        />
                        {errors.password && touched.password && errors.password}
                        <RowFlexItem>
                            <StyledSecondaryButton type="reset" disabled={isSubmitting} onClick={handleReset}>
                                Reset
                            </StyledSecondaryButton>
                            <StyledPrimaryButton type="submit" disabled={isSubmitting}>
                                Add
                            </StyledPrimaryButton>

                        </RowFlexItem>
                    </StyledForm>
                    </>
                )}
            </Formik>
        </>
    )
};