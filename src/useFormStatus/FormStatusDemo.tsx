import React, { useActionState, useOptimistic, useRef } from 'react';
import { useFormStatus } from 'react-dom';

interface FormState {
  userName: string;
  error: string | null;
}

const FormStatusDemo = () => {
  const submitButtonRef = useRef(null);

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
        <MyButton type="submit" ref={submitButtonRef}>Submit</MyButton>
      </form>
    </>
  )
}

interface MyButtonProps {
  children: React.ReactNode;
  ref: React.Ref<HTMLButtonElement>;
  [key: string]: unknown; // Allow any other props
}

function MyButton({ children, ref, ...rest }: MyButtonProps) {
  //allows us to use the <form> as a context provider
  const formStatus = useFormStatus();
  const isPending = formStatus.pending;
  const formData = formStatus.data;

  return (
    <>
      <button {...rest} ref={ref} disabled={isPending}>
        {isPending ? "Submitting..." : children}
      </button>
      {isPending && formData && <p>Submitting with data: {formData.get("userName")?.toString()}</p>}
    </>
  );
}

export default FormStatusDemo;