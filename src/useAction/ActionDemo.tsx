import React, { useAction } from 'react'

const NonActionDemo = () => {
  const [name, setName] = React.useState("");

  async function formAction(formData: FormData) {
    await new Promise((resolve) => setTimeout(() => {
      const userName = formData.get("userName") as string;
      setName(`Name: ${userName}`);
      resolve(null);
    }, 2000));
  }

  return (
    <>
      <p>Current user: <span>{name}</span></p>
      <form action={formAction}>
        <input
          type="text"
          placeholder="Enter your name"
          name="userName"
          required
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default NonActionDemo;