import React from 'react'

function RefDemo() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" ref={inputRef} placeholder="Enter your name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" />
      <EmbeddedButton inputElement={inputRef} />
    </>
  )
}

interface EmbeddedButtonProps {
  inputElement: React.RefObject<HTMLInputElement | null>;
}

function EmbeddedButton({ inputElement }: EmbeddedButtonProps) {
  const handleClick = () => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      Focus on Input
    </button>
  );
}


export default RefDemo;