import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar'
import DashProfile from '../components/DashProfile'
import DashPost from '../components/DashPost'
import DashUsers from '../components/DashUsers'
import DashComments from '../components/DashComments'

export default function Dashboard() {
  const location = useLocation()
  const [tab,setTab] = useState('')

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
     if(tabFromUrl){
      setTab(tabFromUrl)
     }
  },[location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row md:gap-80'>
       <div className='md:w-56'>
        <DashSidebar/>
       </div>
       <div>
        {tab ==='profile' && <DashProfile/>}
        {tab ==='posts' && <DashPost/>}
        {tab === 'users' && <DashUsers/>}
        {tab === 'comments' && <DashComments/>}
       </div>
    </div>
  )
}
