import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import './Loading.scss'
export default function Loading() {
    return (
        <div className='container container-loading'>
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#0d6efd"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
