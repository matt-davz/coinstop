import React from 'react'

const DisplayPorfolios = ({name,balance,change}) => {
    if(!balance) balance = 'N/A'
    if(!change) change = 'N/A'

    return (
        <>
         <div className='portfolios-container'>
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