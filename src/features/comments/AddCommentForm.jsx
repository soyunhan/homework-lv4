import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "redux/modules/commentsSlice";
import Button from "elem/Button";
import Input from "elem/Input";
import flex from "lib/flex";

const AddCommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [comment, setComment] = useState({
    username: "",
    content: "",
  });

  const onAddCommentButtonHandler = (event) => {
    event.preventDefault();
    if (comment.content.trim() === "" || comment.username.trim() === "") {
      return alert("모든 항목을 입력해주세요.");
    }
    dispatch(__addComment({ todoId: id, ...comment }));

    console.log(dispatch( ({ todoId: id, ...comment })))
    setComment({
      username: "",
      content: "",
    });
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  return (
    <StForm onSubmit={onAddCommentButtonHandler}>
      <StNameInput>
        <Input
          placeholder="이름 (5자 이내)"
          value={comment.username}
          type="text"
          name="username"
          onChange={onChangeInputHandler}
          maxLength={5}
        />
      </StNameInput>
      <Input
        placeholder="댓글을 추가하세요. (100자 이내)"
        value={comment.content}
        name="content"
        type="text"
        onChange={onChangeInputHandler}
        maxLength={100}
      />
      <Button type="submit" onClick={onAddCommentButtonHandler}>
        추가하기
      </Button>
    </StForm>
  );
};

export default AddCommentForm;

const StNameInput = styled.div`
  width: 150px;
`;

const StForm = styled.form`
  ${flex({})};
  gap: 12px;
  width: 100%;
  padding: 0 12px;
`;
