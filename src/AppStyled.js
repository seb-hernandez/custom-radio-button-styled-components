import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin-left: 11.75px;
`;

const AttributeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

const Label = styled.label`
    position: relative;
    padding-left: 16px;
    cursor: pointer;
    font-size: 11px;
    color: #818181;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover {
        color: #4eb3ff;
    }
`;

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    width: 10px;
    border: 1px solid #818181;
    border-radius: 50%;
    &::after {
        content: "";
        position: absolute;
        display: none;
        top: 2px;
        left: 2px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #4eb3ff;
    }
`;

const Input = styled.input`
    display: none;
    &:checked ~ ${Checkmark} {
        border: 1px solid #4eb3ff;
        transition: all .25s ease-in-out;
    }
    &:checked ~ ${Checkmark}:after {
        display: block;
    }
`;

export { Label, Input, Checkmark, Container, AttributeContainer };
