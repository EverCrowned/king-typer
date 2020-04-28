import styled from "@emotion/styled";

// File with the styled components for the 2nd pannel of home page
// It contains the chart and the definition of touchtyping

export const StyledPannel2 = styled.div`
    background: white;
    height: auto;
    display: flex;
    position: relative;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    & > * {
        flex: 1 0 450px;
    }
`;
export const VerticallyCenteredDiv = styled.div`
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

export const Text = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 80%;
`;

export const TextStyling = styled.div`
    font-family: "Verdana";
    color: #242424;
    text-align: center;
    font-size: 20px;
`;
export const FixText = styled.div`
    position: relative;
    flex: 2 0 950px;
    min-height: 500px;
`;
export const FixChart = styled.div`
    position: relative;
    flex: 1 0 600px;
    min-height: 500px;
`;
