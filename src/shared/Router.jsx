import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "pages/AddTodo";
import Home from "pages/Home";
import Todo from "pages/Todo";
import Todos from "pages/Todos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 게시물추가하기버튼 , 게시물리스트가기버튼 두개 노출*/}
        <Route path="/" element={<Home />} />
        {/* 게시물 리스트 */}
        <Route path="/works" element={<Todos />} />
        {/* 게시물 상세 */}
        <Route path="/works/:id" element={<Todo />} />
        {/* 게시물 추가 */}
        <Route path="/work/add" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
