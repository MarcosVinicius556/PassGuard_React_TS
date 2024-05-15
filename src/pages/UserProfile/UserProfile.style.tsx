import styled from 'styled-components';


export const UserProfileContainer = styled.div`

    height: 100%;
    width: 100%;
    max-width: 1600px;
    

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
;

    padding: 1em;

    & h1 {
        align-self: start;
    }

    & hr {
        align-self: flex-start;
        width: 500px;
        border: 1.5px solid gray;
    }

    & form {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        & span {
            width: 100%;
            padding: 1em;

            & hr {
                width: 70%;
            }

            & input {
                width: 100%;
                border-radius: 25px;
                border: 1px solid #494949;
                padding: 10px;
                padding-left: 30px;
                outline: none;
                transition: all .4s ease-in-out;

                &:focus {
                    border: 1px solid green;
                    -webkit-box-shadow: 0px 0px 3px 1px #575757;
                    -moz-box-shadow: 0px 0px 3px 1px #575757;
                    box-shadow: 0px 0px 3px 1px #575757;
                }

                & + input {
                    margin-top: 5px;
                }

            }

            & a {
                text-decoration: none;
                align-self: self-end;
                margin-top: 10px;
                font-size: 14px;
                letter-spacing: .5px;
                color: #343434;
            }
        }

        & input[type="submit"] {
            width: 100%;
            border-radius: 25px;
            border: 1px solid #343434;
            padding: 10px;
            outline: none;
            margin-top: 1.5em;
            background: #343434;
            color: #fff;
            font-size: 18px;
            transition: all .3s ease-in-out;

            &:hover {
                background: #e6e6e6;
                color:#343434;
            }
        }

        & a{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1em;
            border-radius: 25px;
            border: 1px solid #343434;
            padding: 10px;
            background: #fa6666;
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-size: 18px;
            transition: all .3s ease-in-out;

            &:hover {
                background: #e05c5c;
                color:#343434;
            }
        }
    }

`;