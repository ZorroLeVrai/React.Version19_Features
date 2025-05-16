import React, { useActionState } from 'react'

const NonActionDemo = () => {
  // useActionState is used here to manage the state of the form submission
  const [userName, formAction, isPending] = useActionState(actionReducer, "");

  async function actionReducer(prevState: string, formData: FormData) {
    try {
      const inputedUserName = formData.get("userName") as string
      const userName = await getUserName(inputedUserName);
      return userName;
    }
    catch (error) {
      console.error("Error updating data:", error);
      return prevState;
    }
  }

  async function getUserName(userName: string) {
    return await new Promise<string>((resolve) => setTimeout(() => {
      resolve(userName);
    }, 1000));
  }

  return (
    <>
      <p>
        Current user: <span>{isPending ? "Loading..." : userName}</span>
      </p>
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