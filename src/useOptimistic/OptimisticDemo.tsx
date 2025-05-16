import { useActionState, useOptimistic } from 'react';

interface FormState {
  userName: string;
  error: string | null;
}

const OptimisticDemo = () => {
  // useActionState is used here to manage the state of the form submission
  const [formState, formAction, isPending] = useActionState<FormState, FormData>(actionReducer, {
    userName: "",
    error: null
  });

  const [optimisticUserName, setOptimisticUserName] = useOptimistic<string | null>(formState.userName);

  async function actionReducer(prevState: FormState, formData: FormData) {
    try {
      const inputedUserName = formData.get("userName") as string;
      setOptimisticUserName(inputedUserName);
      const userName = await getUserName(inputedUserName);
      return { userName, error: null };
    }
    catch (error: unknown) {
      console.error(error);
      if (isString(error)) {
        return { ...prevState, error };
      }
      return { ...prevState, error: "An unknown error occurred" };
    }

    //TypeScript-specific way to narrow down the type of error
    function isString(value: unknown): value is string {
      return typeof value === "string";
    }
  }

  async function getUserName(userName: string) {
    return await new Promise<string>((resolve, reject) => setTimeout(() => {
      if (userName.toLowerCase().includes("error")) {
        reject("Error: User name cannot be 'error'");
        return;
      }

      resolve(userName);
    }, 1000));
  }

  return (
    <>
      {!isPending && formState.error && <p style={{ color: "red" }}>{formState.error}</p>}
      <p>
        Current user: <span>{optimisticUserName}</span>
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

export default OptimisticDemo;