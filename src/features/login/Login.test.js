import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import {Login} from './Login.js';
import { LoginReducer } from './Login.reducer.js';

const mockedStore = {reducer: {
    currentLogin: LoginReducer,
  }};

const store = configureStore(mockedStore);

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()

  render(<Router><Provider store={store}><Login onSubmit={handleSubmit} /></Provider></Router>);
  const user = userEvent.setup()

  await user.type(screen.getByPlaceholderText('Branch id'), 10001);
  await user.type(screen.getByPlaceholderText('User name'), 'testuser01');
  await user.type(screen.getByPlaceholderText('Password'), 'pa55w0rd001');

  await user.click(screen.getByRole('button', {name: /Login/i}))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
        branchId: 10001,
        userName: 'testuser01',
        password: 'pa55w0rd001',
    }),
  )
})