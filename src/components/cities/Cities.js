import React from 'react'
import './Cities.css'

const citiesList = [
  {
    id: 1,
    title: 'London'
  },
  {
    id: 2,
    title: 'Sydney'
  },
  {
    id: 3,
    title: 'Beijing'
  },
  {
    id: 4,
    title: 'Toronto'
  },
  {
    id: 5,
    title: 'Paris'
  }
]
const Cities = () => {
  return (
    <div className='container cities'>
        <div className='city'>
            {
              citiesList.map((city) => {
                return (
                  <h4 key={city.id}>
                    <a href='#city'>{city.title}</a>
                  </h4>
                )
              })
            }
        </div>
    </div>
  )
  // onClick = {() => setQuery({q: city.title})}
}

export default Cities