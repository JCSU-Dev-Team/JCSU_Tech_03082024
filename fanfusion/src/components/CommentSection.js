/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import { auth, db } from '../firebase';
import { onSnapshot, doc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";

function CommentSection({ videoId }) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const user = auth.currentUser;
    const userDocRef = doc(db, `users/${user?.uid}/comments`, videoId);

    useEffect(() => {
        const fetchComments = async () => {
            onSnapshot(userDocRef, (snapshot) => {
                const data = snapshot.data();
                if (data && data.comments) {
                    setComments(data.comments);
                } else {
                    setComments([]); 
                }
            });
        };
        fetchComments();
    }, []);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = async () => {
        if (!comment.trim()) return;
    
        const newComment = {
            text: comment,
        };
    
        try {
            const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
                if (snapshot.exists()) {
                    updateDoc(userDocRef, {
                        comments: arrayUnion(newComment),
                    }).then(() => {
                        console.log("Document updated with new comment");
                    }).catch((error) => {
                        console.error("Error updating document: ", error);
                    });
                } else {
                    setDoc(userDocRef, {
                        comments: [newComment],
                    }).then(() => {
                        console.log("Document created with initial comment");
                    }).catch((error) => {
                        console.error("Error creating document: ", error);
                    });
                }
                unsubscribe(); 
                setComment('');
            });
        } catch (error) {
            console.error("Error writing comment to database: ", error);
        }
    };
    

    return (
        <div>
            <textarea
                value={comment}
                onChange={handleCommentChange}
                style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
                placeholder="Add a comment..."
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    onClick={handleCommentSubmit}
                    style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', borderRadius: '4px', backgroundColor: '#1976D2', color: '#FFF', cursor: 'pointer' }}
                >
                    <ChatIcon style={{ marginRight: '0.5rem' }} />
                    <span>Submit Comment</span>
                </button>
            </div>
            {comments.map((comment, index) => (
                <p key={index}>{comment.text}</p>
            ))}
        </div>
    );
}

export default CommentSection;
