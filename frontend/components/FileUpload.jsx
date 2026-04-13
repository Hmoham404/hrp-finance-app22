import React, { useState } from 'react';

const FileUpload = ({ onFileUpload }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            setFile(selectedFile);
            setError('');
        } else {
            setError('Please upload a valid Excel file.');
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('No file selected.');
            return;
        }

        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('file', file);

        try {
            await onFileUpload(formData);
            setFile(null);
        } catch (err) {
            setError('Error uploading file. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="file-upload">
            <input type="file" accept=".xlsx" onChange={handleFileChange} />
            {error && <p className="error">{error}</p>}
            <button onClick={handleUpload} disabled={loading}>
                {loading ? 'Uploading...' : 'Upload File'}
            </button>
        </div>
    );
};

export default FileUpload;