import React, { useState } from 'react'
import TransitionButton from './TabButton';
import styles from './TabDemo.module.css';

const TransitionDemo = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [pageContent, setPageContent] = useState("Welcome to the Home page!");

  function setActiveTab(tab: string) {
    setSelectedTab(tab);
    updatePageContent(tab);
  }

  function createTransitionButton(title: string) {
    return (
      <TransitionButton
        title={title}
        isActive={selectedTab === title}
        onClick={() => setActiveTab(title)} />
    )
  }

  function updatePageContent(selectedTab: string) {
    switch (selectedTab) {
      case "Home":
        setPageContent("Welcome to the Home page!");
        break;
      case "Products":
        setPageContent("Loading Products...");
        setTimeout(() => {
          setPageContent("Products loaded!");
        }
          , 2000);
        break;
      case "About":
        setPageContent("Learn more about us.");
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
      <h1>{selectedTab}</h1>
      <p>{pageContent}</p>
    </>
  )
}

export default TransitionDemo;