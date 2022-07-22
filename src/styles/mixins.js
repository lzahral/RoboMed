import styled from "styled-components";

export const P = styled.p`
    color: ${(props) => props.theme.p};
`;

export const MainDiv = styled.div`
    display: block;
    width: 100%;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.color};
    overflow: hidden;
`;

export const Div = styled.div`
    background: rgba(240, 11, 11, 0);
    border: 2px solid ${(props) => props.theme.primary};
    backdrop-filter: blur(200px);
    border-radius: 8px;
`;

export const Bg = styled.span`
    background: #3341551a;
    border-radius: 8px;
    color: ${(props) => props.theme.color};
`;

export const Btn = styled.button`
    padding: 0;
    padding: 0 7px 5px 7px;
    border-radius: 30%;
    background: #29a9e1;
    border: 0;
    color: ${(props) => props.theme.primary};
    width: 40px;
    height: 40px;
`;

export const Button = styled.button`
    padding: 0;
    padding: 10px 20px;
    border-radius: 8px;
    background: #29a9e1;
    border: 0;
    color: ${(props) => props.theme.primary};
`;
