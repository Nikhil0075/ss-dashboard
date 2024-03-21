import React from 'react';
import Content1 from './Content1';
import Content3 from './Content3';
import Content2 from './Content2';
import Content5 from './Content5';
import Content6 from './Content6';
import Content4 from './Content4';
import Content7 from './Content7';
import Content8 from './Content8';
import './Dashboard.css';
import Content9 from './Content9';
import Content10 from './Content10';
import BarGraph from './Content9';

const Dashboard = () => {
  return (<React.Fragment>
    
      <section className='whole'><h3 className='h1'>Company Metrics</h3>
        <div className='layout'>
                  
            <div className='c1'>
             <Content1 />
            </div>
            <div className='c2'>
                <Content2 />
            </div>
            <div className='c3'>
             <Content3 />
            </div>
            <div className='c4'>
                <Content4 />
            </div>
            <div className='c5'>
            <Content5 />
            </div>
            <div className='c6'>
                <Content6 />
            </div>
            <div className='c7'>
                <Content7 />
            </div>
            <div className='c8'>
                <Content8 />
            </div>
            <div className='c9'>
                <h3 className='h3'>Revenue By Job Location</h3>
                <BarGraph />
            </div>
            <div className='c10'>
                <h3 className='h3'>Revenue By Job Type</h3>
                <Content10 />
            </div>
        </div>
    </section>
      
    
    </React.Fragment>
    );
};

export default Dashboard;