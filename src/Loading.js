import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'

const Loading = () => {
    return (
        <div style={{ width: '100%', height: '100%', textAlign: 'center', marginTop: '3em' }}>
            <LoadingOutlined style={{ fontSize: '20px' }} />
        </div>
    )
}

export default Loading