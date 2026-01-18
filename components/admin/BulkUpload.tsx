'use client';

import { useState, useRef } from 'react';

interface BulkUploadProps {
  onUpload: (data: unknown[]) => void;
  dataType: string;
}

export default function BulkUpload({ onUpload, dataType }: BulkUploadProps) {
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (!Array.isArray(json)) {
          setError('JSON must be an array');
          return;
        }
        setError(null);
        onUpload(json);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } catch {
        setError('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="hidden"
        id={`bulk-upload-${dataType}`}
      />
      <label
        htmlFor={`bulk-upload-${dataType}`}
        className="cursor-pointer"
      >
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="mt-2 text-sm text-gray-600">
          Click to upload {dataType} JSON file
        </p>
        <p className="mt-1 text-xs text-gray-500">
          or drag and drop
        </p>
      </label>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
