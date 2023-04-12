import React from 'react';
import Navbar from './components/Navbar';
import Route from './components/Route';
import DropDownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

export default function App() {
    const title = "Custom Components Shop";
    
    return (
        <div>
            <Navbar title={title} dark />
            <div className='mx-8'>
                <Route path='/dropdown'>
                    <DropDownPage />
                </Route>
                <Route path='/button'>
                    <ButtonPage />
                </Route>
                <Route path='/accordion'>
                    <AccordionPage />
                </Route>
                <Route path='/modal'>
                    <ModalPage />
                </Route>
                <Route path='/table'>
                    <TablePage />
                </Route>
            </div>
        </div>
    )
}