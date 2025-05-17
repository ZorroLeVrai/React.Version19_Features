import { Suspense, use } from "react";

import React from 'react'

const DataContext = React.createContext<string>("Init");

const UseDemo = () => {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DataContext.Provider value="Hello World">
        <UseDemoChild />
      </DataContext.Provider>
    </Suspense>
  )
};

const UseDemoChild = () => {
  return (
    <UseDemoGrandChild />
  )
}

const UseDemoGrandChild = () => {
  const myData = use(DataContext);

  return (
    <>
      <pre>
        <code>
          {myData}
        </code>
      </pre>
    </>
  )
}

export default UseDemo;