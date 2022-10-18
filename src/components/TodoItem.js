import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdCreate } from "react-icons/md";
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const Update = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
        ${Update} {
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => 
        props.done &&
        css`
            border: 1px solid #D0B8A8;
            color: #D0B8A8;
        `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.done &&
        css`
            color: #ced4da;
        `}
`;

const TodoItem = ({ id, done, text}) => {
    const dispatch = useTodoDispatch();

    const onToggle = () => {
        dispatch({type: "TOGGLE", id})

        fetch(`http://localhost:4000/todos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                "done": !done,
            })
        });
    };
    const onRemove = () => {
        dispatch({type: "REMOVE", id})

        fetch(`http://localhost:4000/todos/${id}`, {method: "DELETE"});
    };

    /* const onUpdate = () => {
        dispatch({
            type: "UPDATE",
            todo: {
                id,
                text
            } 
        });

        fetch(`http://localhost:4000/todos/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                "text": text
            })
        });
    } */

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            {/* <Update>
                <MdCreate />
            </Update> */}
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default React.memo(TodoItem);