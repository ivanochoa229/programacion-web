import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { useState } from 'react';

function App() {
  const [currentContent, setCurrentContent] = useState('module');
  const handleContent = (content) => {
    setCurrentContent(content);
  }
  return (
    <>
      <div className="sidebar-layout">
        <SideBar setContent={handleContent}/>
        <Content currentContent={currentContent} setContent={handleContent}/>
      </div>
    </>
  );
}

export default App;
