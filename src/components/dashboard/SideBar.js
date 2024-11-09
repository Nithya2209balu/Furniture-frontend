import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { AuthContext } from '../../contects/AuthProvider';




function SideBar() {
  const {user}=useContext(AuthContext)
  
  return (
    <div className=' bg-orange-100  h-72'>
      <Sidebar aria-label="Sidebar with content separator example">
      
      <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="">

        {user?.displayName || "Demo User"} 
      </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
      
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          Upload 
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          Manage 
        </Sidebar.Item>
      
        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="/logout" icon={HiTable}>
          Log Out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
   
    </Sidebar.Items>
  </Sidebar>
    </div>
  )
}

export default SideBar