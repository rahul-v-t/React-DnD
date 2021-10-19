import React from 'react';
import styled from "styled-components";

const PictureList = [
    {
        id:1,
        url : "",
    },
    {
        id:2,
        url : "",
    },
    {
        id:3,
        url : "",
    },
]

export default function DragDrop() {
    return (
        <>
            <Pictures></Pictures>
            <Board></Board>
        </>
    )
}

const Pictures = styled.div `
`;
const Board = styled.div `
`;