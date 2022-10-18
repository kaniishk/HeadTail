import React from 'react'
import { useState } from 'react';
import {Form,Button} from 'react-bootstrap'

let prev = 0;
export const HeadTail = () => {

  const [val,setVal] = useState(0);
  const [error,setError] = useState(false);
  const [col,setCol] = useState([]);
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    if(val === 0){
        setError(true);
        return;
    }
    setError(false);

    if(val === prev){
        let newRow = col;
        // eslint-disable-next-line eqeqeq
        let char = val == 1? 'H' : 'T';
        newRow[newRow.length-1].push(char);
        setCol(newRow);
    }
    else {
        // eslint-disable-next-line eqeqeq
        let char = val == 1? 'H' : 'T';
        let newCol = [char];
        setCol([...col,newCol]);
    }
    
    prev = val;
    setVal(0);
  }
  
  const onOptionChange = (e) => {
    setVal(e.target.value);
  }

  return (
    <div className='headtail'>
        <div className='container'>
            <div className='row'>
                <Form onSubmit={onFormSubmit} role="form">
                    <Form.Group style={{display:'inline-block', width:'40vw'}}>
                        <Form.Select value={val} onChange={onOptionChange}>
                            <option value={0}>Select Value</option>
                            <option value={1}>H</option>
                            <option value={2}>T</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type="submit" style={{display:'inline-block',margin:'1em'}}>Submit</Button>
                </Form>
            </div>
            { error && 
                <div>
                    <Button variant='danger'>Please Select Value from Dropdown</Button>
                </div> 
            }
                <div className='row'>
                    {col.map((c) => {
                        return <ul style={{display:'inline-block',listStyle:'none',width:'5%',margin:'3px'}}>
                            {c.map((el) => {
                                return <li style={{margin:'5px'}}><Button variant='outline-secondary'>{el}</Button></li>
                            })}
                        </ul>
                    })}
                </div>
        </div>
    </div>
  )
}
