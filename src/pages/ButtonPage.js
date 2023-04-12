import React from 'react';
import Button from '../components/Button';

export default function ButtonPage() {
  return (
    <div>
        <h1 className='text-center my-5 text-xl'>Button Page</h1>
        <div>
          <section className='flex justify-evenly my-8'>
            <Button rounded dangerOutlined> Click Me </Button>
            <Button rounded warningOutlined> Click Me </Button>
            <Button rounded primaryOutlined> Click Me </Button>
            <Button rounded successOutlined> Click Me </Button>
          </section>
          <section className='flex justify-evenly my-8'>
            <Button dangerOutlined> Click Me </Button>
            <Button warningOutlined> Click Me </Button>
            <Button primaryOutlined> Click Me </Button>
            <Button successOutlined> Click Me </Button>
          </section>
          <section className='flex justify-evenly my-8'>
            <Button danger> Click Me </Button>
            <Button warning> Click Me </Button>
            <Button primary> Click Me </Button>
            <Button success> Click Me </Button>
          </section>
          <section className='flex justify-evenly my-8'>
            <Button rounded danger> Click Me </Button>
            <Button rounded warning> Click Me </Button>
            <Button rounded primary> Click Me </Button>
            <Button rounded success> Click Me </Button>
          </section>
        </div>
    </div>
  )
}
