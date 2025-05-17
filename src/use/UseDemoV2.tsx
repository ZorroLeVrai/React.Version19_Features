import React, { Suspense, use } from 'react';

/**
 * UseDemoV2 must be used outside of a Suspense boundary.
 */
const UseDemoV2 = () => {
  const [userPromise] = React.useState<Promise<any[]> | null>(() => fetchData());

  async function fetchData() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    return await reponse.json();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UseDemoNested userPromise={userPromise} />
    </Suspense>
  )
}

interface UseDemoNestedProps {
  userPromise: Promise<any[]> | null;
}


function UseDemoNested({ userPromise }: UseDemoNestedProps) {
  const users = userPromise ? use(userPromise) : null;

  return (
    <ul>
      {users && users.map(user => (
        <div key={user.id}>
          <li>{user.name}</li>
        </div>
      ))}
    </ul>
  )
}

export default UseDemoV2;