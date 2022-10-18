import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Home = () => {
    
  return (
    <div className='home'>
        <div className='container'>
            <div className='row'>
                <h3> Navigation Links  </h3>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <Link to='/about'>
                        <Button variant='primary'>About</Button>
                    </Link>
                </div>
                <div className='col-6'>
                    <Link to='/headtail'>
                        <Button variant='success'>Head & Tail</Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
