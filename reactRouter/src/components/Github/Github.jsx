import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();

    return (
        <div className='text-center mx-14 my-10 bg-gray-600 text-white rounded 
        p-4 text-3xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} 
        alt='Git picture' width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/BURHANUDDIN51-PYTHON')
    return response.json();
}