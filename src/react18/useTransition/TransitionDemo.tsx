import React, { useState, useTransition } from 'react'
import TransitionButton from './TransitionButton';
import styles from './TransitionDemo.module.css';

const TransitionDemo = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [pageTexts, setPageTexts] = useState(["Welcome to the Home page!"]);
  const [isPending, startTransition] = useTransition();

  function setActiveTab(tab: string) {
    startTransition(() => {
      // interuptable state change
      setSelectedTab(tab);
      updatePageContent(tab);
    });
  }

  function createTransitionButton(title: string) {
    return (
      <TransitionButton
        title={title}
        isActive={selectedTab === title}
        onClick={() => setActiveTab(title)} />
    )
  }

  function createStringArray(nbElements: number) {
    const array = [];
    for (let i = 0; i < nbElements; i++) {
      array.push(`Product ${i + 1}`);
    }
    return array;
  }

  function updatePageContent(selectedTab: string) {
    switch (selectedTab) {
      case "Home":
        setPageTexts(["Welcome to the Home page!"]);
        break;
      case "Products":
        setPageTexts(["Loading Products..."]);
        setPageTexts(createStringArray(10000));
        break;
      case "About":
        setPageTexts(["Learn more about us."]);
        break;
      default:
        return "";
    }
  }

  return (
    <>
      <nav className={styles.navigationButton}>
        {createTransitionButton("Home")}
        {createTransitionButton("Products")}
        {createTransitionButton("About")}
      </nav>
      {isPending ?
        <p>Loading...</p> :
        <>
          <h1>{selectedTab}</h1>
          {pageTexts.map((text, index) => <p key={index}>{text}</p>)}
        </>
      }
    </>
  )
}

export default TransitionDemo;