import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    max-width: 1600px;
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
        height: 10em;
        width: 10em;
        border-radius: 50%;
        background: #343a40;
        display: flex;
        justify-content: center;
        align-items: end;
        overflow: hidden;

        & svg {
            height: 8em;
            width: 8em;
            color: green;
        }
    }

    & h3 {
        margin-top: .5em;
        font-weight: bold;
        text-align: center;
    }

    & h5 {
        margin-top: .5em;
        text-align: center;
    }
`;

export const TableContainer = styled.div`
    width: 100%;
    height: auto;
    max-height: 300px;

    .new {
        float: right;
        margin-bottom: 1.5em;
        background: green;
        padding: .5em;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        font-weight: 600;
        color: #fff;
        transition: all ease-in-out .3s;
        text-decoration: none;
    }

    .new svg {
        margin-right: 5px;
    }

    .new:hover {
        background: #5fd204;
        transform: scale(1.1);
    }

    & table {
        margin: 0;
        padding: 0;
        width: 100%;
        table-layout: fixed;
        border-collapse: collapse;

        & caption {
            font-size: 1.5em;
            margin: .5em 0 .75em;
        }

        & tr {
            border-bottom: 1px solid #ddd;
            padding: .35em;
        }

        & th, td {
            padding: .62em;
            text-align: center;
        }

        & th {
            font-size: .85em;
            letter-spacing: .1em;
            text-transform: uppercase;
        }

        & td .action {
            width: 30px;
            height: 30px;
            border: 0;
            padding: 5px;
            border-radius: 4px;
            display: inline-block;
            margin-right: 3px;
        }

        & .action svg {
            vertical-align: middle;
        }
    }

    @media screen and (max-width: 600px) {
        & table {
            border: 0;

            & caption {
                font-size: 1.3em;
            }

            & thead {
                border: none;
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
            }

            & tr {
                border-bottom: 3px solid #ddd;
                display: block;
                margin-bottom: .60em;
            }

            & td {
                border-bottom: 1px solid #ddd;
                display: block;
                font-size: .8em;
                text-align: right;
            }

            & td::before {
                content: attr(data-label);
                float: left;
                font-weight: bold;
                text-transform: uppercase;
            }
        }
    }
`;

export const LetterAbbreviation = styled.div`
    background: purple;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;
