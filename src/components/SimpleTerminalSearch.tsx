import React, { useState, useMemo } from 'react';
import { fileSystemData } from '../data/fileSystemData';
import type { FileNode } from '../types/fileSystem';

interface SimpleTerminalSearchProps {
  value: string;
  onChange: (value: string) => void;
  onCommand: (command: string, target?: FileNode) => void;
  placeholder?: React.ReactNode;
}

const SimpleTerminalSearch: React.FC<SimpleTerminalSearchProps> = ({
  value,
  onChange,
  onCommand,
  placeholder
}) => {
  const [showResults, setShowResults] = useState(false);

  // Get all files from fileSystemData
  const getAllFiles = (node: FileNode): FileNode[] => {
    let files: FileNode[] = [];
    
    if (node.type === 'file') {
      files.push(node);
    }
    
    if (node.children) {
      for (const child of node.children) {
        files = files.concat(getAllFiles(child));
      }
    }
    
    return files;
  };

  const allFiles = useMemo(() => {
    return getAllFiles(fileSystemData);
  }, []);

  // Search for files
  const searchResults = useMemo(() => {
    if (!value || value.length < 2) return [];
    
    const query = value.toLowerCase();
    return allFiles
      .filter(file => 
        file.name.toLowerCase().includes(query) ||
        file.path.toLowerCase().includes(query) ||
        (file.content && file.content.toLowerCase().includes(query))
      )
      .slice(0, 6);
  }, [value, allFiles]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setShowResults(newValue.length >= 2);
  };

  const handleFileSelect = (file: FileNode) => {
    onCommand(`cat ${file.path}`, file);
    onChange('');
    setShowResults(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowResults(false);
    }
  };

  return (
    <div className="terminal-search-container">
      <div className="terminal-input-wrapper">
        {value === '' && placeholder && (
          <div className="terminal-placeholder">
            {placeholder}
          </div>
        )}
        <input
          type="text"
          className="terminal-input"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => value.length >= 2 && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          aria-label="터미널 입력창"
          autoComplete="off"
          style={{ background: 'transparent' }}
        />
      </div>

      {showResults && searchResults.length > 0 && (
        <div className="search-suggestions">
          <div className="suggestions-header">
            <span className="suggestions-title">검색 결과</span>
            <span className="suggestions-count">{searchResults.length}개</span>
          </div>
          <ul className="suggestions-list">
            {searchResults.map((file) => (
              <li
                key={file.id}
                className="suggestion-item"
                onClick={() => handleFileSelect(file)}
              >
                <div className="suggestion-icon">📄</div>
                <div className="suggestion-content">
                  <div className="suggestion-header">
                    <span className="suggestion-filename">{file.name}</span>
                    <span className="suggestion-type">파일</span>
                  </div>
                  <div className="suggestion-details">
                    <span className="suggestion-path">{file.path}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SimpleTerminalSearch;