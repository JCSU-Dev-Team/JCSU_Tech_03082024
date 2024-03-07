import React, { useState } from 'react';
import { auth, storage, db } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button, TextField, Typography } from '@mui/material';
import { collection, addDoc} from "firebase/firestore";

function Upload() {

    const user = auth.currentUser;

    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };

    const handleUpload = async (event) => {
        if (!file) return;

        const storageRef = ref(storage, `users/${user?.uid}/content`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
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
        </div>
    );
}

export default Upload;
