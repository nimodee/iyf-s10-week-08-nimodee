function PostCard({ post, onLike, onDelete }) {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>Likes: {post.likes}</p>

            <button onClick={onLike}>
                ❤️ Like</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default PostCard;