import React from 'react'

const Title = ({title, subtitle}) => {
  return (

    <div className=' text-center text-[15px] font-[600] m-10'>
        <p className=' uppercase text-[#212EA0]'>{title}</p>
        <h1 className='text-[32px] mt-1 text-[#000F38]'>{subtitle}</h1>   
    </div>
  )
}

export default Title