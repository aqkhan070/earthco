import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import DashboardPage from './pages/DashboardPage';
import EmployeesPage from './pages/EmployeesPage';
import EstimatePage from './pages/EstimatePage';
import ServiceRequestsPage from './pages/ServiceRequestsPage';
import ServiceRequestPage from './pages/ServiceRequestPage';
import IrrigationPage from './pages/IrrigationPage';
import AddEstimatePage from './pages/AddEstimatePage';
import Audit from './components/Reports/Audit';
import LandscapeForm from './components/Landscape/Form';
import Landscape from './components/Landscape/Landscape';
import SummaryReport from './components/Reports/SummaryReport';
import ProposalSummary from './components/Reports/ProposalSummary';
import DataFun from './context/AppData';
import CustomersPage from './pages/CustomersPage';
import { RoutingContext } from './context/RoutesContext';
import OpenEstPage from './pages/OpenEstPage';
import FromDesign from './components/Test Forms/FromDesign';
// import '../public/assets/vendor/global/global.min.js'

function App() {



  const { estimateRoute, SRroute } = useContext(RoutingContext);
  console.log(estimateRoute);
  return (
    <BrowserRouter hashType="hash" basename=''>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route  path='/Dashboard' element={<DashboardPage />} />
        <Route path='/Employees' element={<EmployeesPage />} />
        <Route path='/Estimates' element={
          <DataFun>
            <EstimatePage />
          </DataFun>
        } />
        <Route path='/service-requests' element={
          <DataFun>
            <ServiceRequestsPage />
          </DataFun>
        } />
        <Route path={`/service-requests/${SRroute}`} element={
          <DataFun>
            <ServiceRequestPage />
          </DataFun>
        } />
         <Route path='/Audit' element={<Audit />} />
         <Route path='/LandscapeForm' element={<LandscapeForm />} />
         <Route path='/Landscape' element={<Landscape />} />
         <Route path='/SummaryReport' element={<SummaryReport />} />
         <Route path='/ProposalSummary' element={<ProposalSummary />} />
        <Route path='/Irrigation-form' element={<IrrigationPage />} />
        <Route path='/add-estimate' element={<AddEstimatePage />} />
        <Route path='/Customers' element={
          <DataFun>
            <CustomersPage />
          </DataFun>
        } />
        <Route path={`/Estimates/${estimateRoute}`} element={
          <DataFun>
            <OpenEstPage />
          </DataFun>
        } />
        <Route path='/test' element={<FromDesign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
