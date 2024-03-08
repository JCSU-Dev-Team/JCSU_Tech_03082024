import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';
import ReactPlayer from 'react-player';
import LikeButton from './LikeButton';
import CommentSection from './CommentSection';

function View() {
    const user = auth.currentUser;
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    const userDocRef = collection(db, `users/${user.uid}/content`);
                    const snapshot = await getDocs(userDocRef);
                    const urlsPromises = snapshot.docs.map(async (doc) => {
                        const content = doc.data();
                        try {
                            const videoRef = storageRef(storage, `content/${user.uid}/${content.fileName}`);
                            const url = await getDownloadURL(videoRef);
                            return { id: doc.id, filename: content.fileName, downloadURL: url };
                        } catch (error) {
                            console.error('Error retrieving download URL:', error);
                            setError(`Error retrieving download URL for ${content.fileName}`);
                            return null;
                        }
                    });
                    const urls = await Promise.all(urlsPromises);
                    setVideos(urls.filter((video) => video !== null));
                } else {
                    setError('No user is currently signed in.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data.');
            }
        };

        fetchData();
    }, [user]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {error && <p>{error}</p>}
            <h2>My Videos</h2>
            {videos.map((video) => (
                <div key={video.id}>
                    <p>{video.filename}</p>
                    <ReactPlayer
                        controls
                        url={video.downloadURL}
                        width="320px"
                        height="240px"
                    />
                    <LikeButton videoId={video.id} />
                    <CommentSection videoId={video.id} />
                </div>
            ))}
        </div>
    );
}

export default View;
