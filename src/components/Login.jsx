import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import PreLoad from './PreLoad'
import { Foreword } from './Foreword'

const Login = () => {

  const loaded = useSelector(state => state.config.preload);

  return (
    <div className='login'>
    {loaded
      ? <Foreword />
      : <PreLoad />
    }
    </div>
  )
}

export default Login