/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { auth, storage, db } from '../firebase';
import { ref, uploadBytes} from "firebase/storage";
import { Button, TextField, Typography} from '@mui/material';
import { collection, addDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

function Upload() {
    const user = auth.currentUser;
    const navigate = useNavigate();

    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [uploadComplete, setUploadComplete] = useState(false);
    const [uploadMore, setUploadMore] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handleUpload = async (event) => {
        if (!file) return;

        const storageRef = ref(storage, `content/${user?.uid}/${file.name}`);
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded file!');
            setUploadComplete(true); 
        });
        const userRef = collection(db, `users/${user?.uid}/info`);
        addDoc(userRef, {
            fileName: file.name,
            description: description,
        })
        .then(() => {
            console.log("Data written to database");
        })
        .catch((error) => {
            console.error("Error writing data to database: ", error);
        });
        setFile(null);
        setDescription('');
    };

    const handleUploadMore = () => {
        setUploadMore(true);
        setUploadComplete(false);
    };

    const handleNoUploadMore = () => {
        setUploadMore(false);
        setUploadComplete(false);
        navigate('/for-you')
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="file-upload" />
            <label htmlFor="file-upload">
                <Button variant="contained" component="span" style={{ margin: '20px 0' }}>
                    Select File
                </Button>
            </label>
            {file && (
                <Typography variant="body1" style={{ margin: '20px 0' }}>
                    Selected File: {file.name}
                </Typography>
            )}
            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="outlined"
                label="Description"
                fullWidth
                multiline
                rows={4}
                style={{ marginBottom: '20px' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                disabled={!file}
            >
                Upload
            </Button>
            {uploadComplete && (
                <div>
                    <Typography variant="body1" style={{ marginTop: '20px', color: 'green' }}>
                        Upload complete! Do you want to upload more?
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleUploadMore} style={{ margin: '10px' }}>
                        Yes
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleNoUploadMore} style={{ margin: '10px' }}>
                        No
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Upload;
