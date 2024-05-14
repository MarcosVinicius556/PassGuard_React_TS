import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;

    & span {
        border: 1px solid gray;
        height: 14em;
        width: 14em;
        border-radius: 50%;
        background: #343a40;
        display: flex;
        justify-content: center;
        align-items: end;
        overflow: hidden;

        & svg {
            height: 12em;
            width: 12em;
            color: green;
        }
    }

    & h3 {
        margin-top: 1em;
        font-weight: bold;
        text-align: center;
    }

    & h5 {
        margin-top: 1em;
        text-align: center;
    }
`;

export const TableContainer = styled.div`
    width: 100%;
`;