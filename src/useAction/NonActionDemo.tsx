import React from 'react'

const NonActionDemo = () => {
  const [input, setInput] = React.useState("");
  const [name, setName] = React.useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await new Promise((resolve) => setTimeout(() => {
      setName(`Name: ${input}`);
      setInput("");
      resolve(null);
    }, 2000));
  }

  return (
    <>
      <p>Current user: <span>{name}</span></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default NonActionDemo;