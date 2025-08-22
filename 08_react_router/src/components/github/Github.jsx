import React, { useEffect,useState } from 'react'

const Github = () => {

    const [data,setData] = useState([])
    useEffect (
        () => {
            fetch('https://api.github.com/users/NischalKothari')
            .then(response => response.json())
            .then(data =>{
                 console.log(data)
                 setData(data)
            })
        }, []
    )

  return (
    <div className='flex flex-col gap-4 justify-center items-center text-2xl py-10 '>
      <p>Github Username : <span className='text-rose-400'>{data.login}</span> </p>
      <p>Github Followers : <span className='text-rose-400'>{data.followers}</span></p>
      <img className='' src= {data.avatar_url} alt="Github photo" width={300}/>
    </div>
  )
}

export default Github
