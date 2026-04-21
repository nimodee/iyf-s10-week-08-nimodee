import { useState } from 'react';

import Layout from './components/Layout';
import UserGreeting from './components/UserGreeting';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import UserForm from './components/UserForm';
import EventExamples from './components/EventExamples';
import ContactForm from './components/ContactForm';
import TodoList from './components/TodoList';
import Stats from './components/Stats';
import PostList from './components/Post/PostList';

import Button from './components/Button';
import CreatePost from './components/Post/CreatePost';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", likes: 0 },
    { id: 2, title: "Second Post", likes: 0 }
  ]);

  const [search, setSearch] = useState('');

  const handleLike = (id) => {
    setPosts(
      posts.map(post =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
};
const deletepost = (id) => {
  setPosts(posts.filter(post => post.id !== id));
};

  const totalPosts = posts.length;

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  const filteredPosts = posts.filter(post =>
  post.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <Layout>
      <UserGreeting user={{ name: "John" }} />

      <Counter />
      <Toggle />
      <UserForm />
      <EventExamples />
      <ContactForm />
      <TodoList />
      <CreatePost onAddPost={addPost} />
      
      <input
         type="text"
         placeholder="Search posts..."
         value={search}
         onChange={(e) => setSearch(e.target.value)}
      />
      <PostList
        posts={filteredPosts}
        onLike={handleLike}
       onDelete={deletepost}
      />

      <Stats
        totalPosts={totalPosts}
        totalLikes={totalLikes}
      />

      <Button text="Submit" variant="primary" />
      <Button text="Cancel" variant="secondary" />
      <Button text="Delete" variant="danger" />
      <Button />
    </Layout>
  );
}

export default App;