import { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import { mdFiles } from './mdFiles';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(280);

  return (
    <div className="app">
      <Sidebar
        pages={mdFiles}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onWidthChange={setSidebarWidth}
      />
      <div className="main" style={{ marginLeft: `${sidebarWidth}px` }}>
        <h1>Node stream Module</h1>
        <Content
          file={mdFiles[currentPage]?.file}
          currentPage={currentPage}
          totalPages={mdFiles.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
