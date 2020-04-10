import styled from "@emotion/styled";

//// CONTAINER 1
export const StyledPannel1 = styled.div`
    position: relative;
    background-color: #198cf6;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    min-height: 900px;
    padding-top: 10px;
    align-content: center;
    & > * {
        flex: 1 0 450px;
    }
`;
//// CROWN SVG 1
export const SvgCrown = styled.div`
    min-width: 480px;
`;
export const FixCrown = styled.div`
    position: relative;
    flex: 1 0 500px;
    min-height: 500px;
`;

export const VerticallyCenteredDiv = styled.div`
    position: absolute;
    top: 35%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;
//// TEXT ON THE RIGHT 1
export const FixText = styled.div`
    position: relative;
    flex: 2 0 750px;
    min-height: 600px;
`;

export const TitleTextButton = styled.div`
    font-family: "Verdana";
    color: white;
    font-weight: bold;
    text-align: center;
    height: auto;
`;
export const VerticallyCenteredText = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
`;

export const Title = styled.div`
    font-size: 110px;
    text-align: center;
`;

export const RandomText = styled.div`
    font-size: 22px;
    font-style: oblique;
    font-weight: normal;
    padding: 30px;
    height: 50px;

    .react-rotating-text-cursor {
        animation: blinking-cursor 0.6s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s
            infinite;
    }

    @keyframes blinking-cursor {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

export const Wave = styled.div`
    position: absolute;
    width: 100%;
    bottom: -5px;
`;
export const TypeButton = styled.div`
    background: #fde400;
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 15px 25px;

    position: relative;
    width: 150px;
    margin: auto;

    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    -ms-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        -ms-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
    &::after {
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
        -ms-box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    &:hover::after {
        opacity: 1;
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    padding-top: 20px;
    a {
        text-decoration: none;
        color: black;
    }
`;
