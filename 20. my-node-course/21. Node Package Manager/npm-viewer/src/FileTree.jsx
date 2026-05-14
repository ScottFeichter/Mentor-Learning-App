import { useState } from 'react';
import { VscFolder, VscFolderOpened, VscFile } from 'react-icons/vsc';
import './FileTree.css';

function TreeItem({ item, onFileClick, selectedFile }) {
  const [isOpen, setIsOpen] = useState(false);

  if (item.type === 'placeholder') {
    return (
      <div className="tree-item placeholder">
        <span className="tree-label">{item.name}</span>
      </div>
    );
  }

  if (item.type === 'folder') {
    return (
      <div className="tree-folder">
        <div className="tree-item folder" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <VscFolderOpened /> : <VscFolder />}
          <span className="tree-label">{item.name}</span>
        </div>
        {isOpen && item.children && (
          <div className="tree-children">
            {item.children.map((child, i) => (
              <TreeItem key={i} item={child} onFileClick={onFileClick} selectedFile={selectedFile} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`tree-item file ${selectedFile === item.name ? 'selected' : ''}`}
      onClick={() => onFileClick(item)}
    >
      <VscFile />
      <span className="tree-label">{item.name}</span>
    </div>
  );
}

export default function FileTree({ data }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');

  const handleFileClick = (item) => {
    setSelectedFile(item.name);
    setFileContent(item.content || '');
  };

  return (
    <div className="file-tree-container">
      <div className="file-tree-header">{data.name}/</div>
      <div className="file-tree-body">
        <div className="file-tree-sidebar">
          {data.tree.map((item, i) => (
            <TreeItem key={i} item={item} onFileClick={handleFileClick} selectedFile={selectedFile} />
          ))}
        </div>
        <div className="file-tree-content">
          {selectedFile ? (
            <>
              <div className="file-tree-filename">{selectedFile}</div>
              <pre className="file-tree-code"><code>{fileContent}</code></pre>
            </>
          ) : (
            <div className="file-tree-placeholder">Click a file to view its contents</div>
          )}
        </div>
      </div>
    </div>
  );
}
