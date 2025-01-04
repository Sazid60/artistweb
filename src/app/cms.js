"use client";
import { useState } from 'react';
import axios from 'axios';

export default function CMSPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addCard = async () => {
        await axios.post('/api/services', { title, description });
        alert('Card Added!');
    };

    return (
        <div>
            <h1>CMS Management</h1>
            <input onChange={(e) => setTitle(e.target.value)} placeholder="Card Title" />
            <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <button onClick={addCard}>Add Card</button>
        </div>
    );
}
