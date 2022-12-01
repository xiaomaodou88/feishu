import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'
import { Provider } from 'mobx-react'
import  RootStore  from './stores/index'

import Home from './pages/Home/Home.jsx'
import './App.scss';

function App() {
  return (
    <Provider {...new RootStore()}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='' element={<div>消息</div>}></Route>
              <Route path='face' element={<div>视讯会议</div>}></Route>
              <Route path='maliList' element={<div>通讯录</div>}></Route>
              <Route path='work' element={<div>工作台</div>}></Route>
              <Route path='doc' element={<div>云文档</div>}></Route>
              <Route path='more' element={<div>更多</div>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
