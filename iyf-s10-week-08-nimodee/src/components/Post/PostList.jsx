import PostCard from '../PostCard';

function PostList({ posts, onLike,onDelete }) {
    return (
        <div>
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                    onLike={() => onLike(post.id)}
                    onDelete={() => onDelete(Post.id)}
                />
            ))}
        </div>
    );
}

export default PostList;