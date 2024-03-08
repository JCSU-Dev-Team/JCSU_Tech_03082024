/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { auth, db } from '../firebase';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';

function LikeButton({ videoId }) {
    const [liked, setLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(0);
    const user = auth.currentUser;
    const userDocRef = doc(db, `users/${user?.uid}/content`, videoId);

    useEffect(() => {
        const fetchLikes = async () => {
            onSnapshot(userDocRef, (snapshot) => {
                const data = snapshot.data();
                if (data) {
                    setNumLikes(data.likes);
                }
            });
        };
        fetchLikes();
    }, []);

    useEffect(() => {
        const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
            const data = snapshot.data();
            if (data) {
                setNumLikes(data.likes);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLike = async () => {
        try {
            await updateDoc(userDocRef, {
                likes: liked ? numLikes - 1 : numLikes + 1,
            });
            setLiked(!liked);
        } catch (error) {
            console.error('Error updating likes:', error);
        }
    };

    return (
        <div>
            <FavoriteIcon
                sx={{
                    cursor: 'pointer',
                    fontSize: '2rem',
                    transition: 'color 0.3s',
                    '&:hover': {
                        color: 'red',
                    },
                }}
                color={liked ? 'secondary' : 'inherit'}
                onClick={handleLike}
            />
            <span style={{ marginLeft: '0.5rem' }}>{liked ? 'Liked' : 'Like'}</span>
            <span style={{ marginLeft: '0.5rem' }}>{numLikes}</span>
        </div>
    );
}

export default LikeButton;
