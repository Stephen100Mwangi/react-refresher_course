/* eslint-disable no-unused-vars */
import React from 'react'
import myGoods from '../Lists'
// import { orderedGoods } from '../Lists'


const Mapping = () => {
  // console.log(orderedGoods);
  let ordered = myGoods.sort((a,b) => a.name.localeCompare(b.name));
  return (
    <>
    <div className="flex space-x-10 p-8 flex-wrap items-center justify-center">
        {
            myGoods.map((item) => (
                <div className="flex flex-col space-y-5" key={item.name}>
                    <p>{item.name}</p>
                    <small>{item.price}</small>
                    <img src={item.image} className="w-[200px] h-[160px] rounded-lg"/>
                </div>
            ))
        }
    </div>
    <div className="flex space-x-10 p-8 flex-wrap items-center justify-center">
        {
          ordered.map((item) => (
            <div className="flex flex-col space-y-5" key={item.name}>
              <p>{item.name}</p>
              <small>{item.price}</small>
              <img src={item.image} className="w-[200px] h-[160px] rounded-lg"/>
            </div>

          ))
        }
        {
          ordered.length > 0 ? `${ordered.length}  Items`:"Empty list "
        }
    </div>
    </>
  )
}

export default Mapping
