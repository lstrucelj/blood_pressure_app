import React, { useEffect } from 'react'
import { Screen } from './Dashboard.elements'
import PageContainer from './PageContainer/PageContainer'
import Sidebar from './Sidebar/Sidebar'

const Dashboard = () => {

    return (
        <Screen>
            <Sidebar />
            <PageContainer />
        </Screen>
    )
}

export default Dashboard