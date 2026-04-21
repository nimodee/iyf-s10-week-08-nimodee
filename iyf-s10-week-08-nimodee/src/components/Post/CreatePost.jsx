import { useState } from 'react';

function CreatePost({ onAddPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) return;

        const newPost = {
            id: Date.now(),
            title,
            content,
            likes: 0
        };

        onAddPost(newPost);

        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Post content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button type="submit">Add Post</button>
        </form>
    );
}

export default CreatePost;