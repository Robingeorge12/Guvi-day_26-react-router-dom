import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Career from '../component/Career/Career'
import DataScience from '../component/DataScience/DataScience'
import Cyber from '../component/Cyber/Cyber'
import FSD from '../component/FSD/FSD'
import AllList from '../component/AllList/AllList'

function AllRoute() {
  return (
    <div>
        <Routes>
<Route path="/" element={<AllList />} />
<Route path="/data" element={<DataScience />} />
<Route path="/career" element={<Career />} />
<Route path="/cyber" element={<Cyber />} />
<Route path="/fsd" element={<FSD />} />
{/* <Route path="" element={< />} /> */}
{/* <Route path="" element={< />} /> */}
{/* <Route path="" element={< />} /> */}

        </Routes>

    </div>
  )
}

export default AllRoute