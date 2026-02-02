import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PostListPage from './pages/posts/PostListPage';
import PostCreatePage from './pages/posts/PostCreatePage';
import PostDetailPage from './pages/posts/PostDetailPage';
import PostEditPage from './pages/posts/PostEditPage';
import ErrorPage from './pages/ErrorPage';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/posts/new" element={<PostCreatePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/:id/edit" element={<PostEditPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App
