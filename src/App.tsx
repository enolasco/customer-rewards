import React from 'react';
import { useDispatch } from 'react-redux';
import { loadCustomerRecords } from './data/redux/actions/customerAction';
import { Routes } from './components/Routes';

function App() {
  const dispatch = useDispatch();
  dispatch(loadCustomerRecords());
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
