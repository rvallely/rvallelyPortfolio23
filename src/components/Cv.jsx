import React from 'react';
import Nav from './Nav';
import RosieVallelyCv2023 from '../assets/RosieVallelyCv2023.pdf';

function Cv () {
    return (
        <div className='page relative-page'>
            <Nav selectedItem='CV'/>
            <div style={{ marginTop: '2%' }}>
            <embed
    src={RosieVallelyCv2023}
    type="application/pdf"
    height="1000px"
    width="100%"
></embed>
            </div>
            
        </ div>
    );
}

export default Cv;
