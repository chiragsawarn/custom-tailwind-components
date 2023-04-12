import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

export default function Modal({onChange}) {
    return ReactDOM.createPortal(
        <div className='fixed inset-0 bg-slate-200 bg-opacity-90'>
            <div className='absolute inset-40 bg-white'>
                <div className='flex flex-col items-center h-full justify-center bg-red-300'>
                    <h1 className='my-3'>Your Modal is now open!</h1>
                    <Button dangerOutlined rounded onClick={onChange}> Close Modal</Button>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    )
}
