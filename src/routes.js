import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ArticleDetail from './pages/articles/article-detail';
import Articles from './pages/articles';
import WrapComps from './hoc/wrap-comps';
import ArticleEdit from './pages/articles/article-edit';
import Login from './pages/login';
import ArticleInsert from './pages/articles/article-insert';
import Register from './pages/register';

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:id' element={<WrapComps el={ArticleDetail} />} />
          <Route path='/articles/:id/edit' element={<WrapComps el={ArticleEdit} />} />
          <Route path='/articles/insert' element={<WrapComps el={ArticleInsert} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters;