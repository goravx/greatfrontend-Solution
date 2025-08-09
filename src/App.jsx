import React from 'react'
import  useNetwork from './hooks/useNetwork'

export default function App(){
  const network = useNetwork();

  return (
    <div>
      <h1>Custom useNetworkState</h1>
      <pre>{JSON.stringify(network, null, 2)}</pre>
    </div>
  );
}
