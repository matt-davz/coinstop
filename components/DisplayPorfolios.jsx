import React from 'react'
import { useNavigate } from 'react-router-dom'

const DisplayPorfolios = ({id, name,balance,change}) => {
    if(!balance) balance = 'N/A'
    if(!change) change = 'N/A'
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/portfolio/${id}`)
    }

    return (
        <>
         <div className='portfolios-container' onClick={handleClick}>
            <h5 style={{margin: '0'}}>{name}</h5>
            <div className='portfolios-info'>
                <p>{balance+' $'}</p>
                <p>{change ? `${(change)}%`: `-${change}%`}</p>
            </div>
        </div>
        </>
       
    )
}

export default DisplayPorfolios