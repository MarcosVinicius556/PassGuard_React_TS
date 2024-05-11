import { styled } from 'styled-components';

export const ErrorMessage = styled.p`

    border: 1px solid #454545;
    border-radius: 25px;

    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: start;
    padding-left: .5em;
    align-items: center;
    background: #ee8080c6;
    color: #282727;
    align-self: flex-start;
    margin-bottom: 14px;
    font-weight: bold;

    margin-top: 5px;
    margin-bottom: 5px;

    & svg {
        margin-right: 15px;
    }

`;