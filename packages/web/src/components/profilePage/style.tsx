import styled from "@emotion/styled";
import { getTheme } from "../../utils/getTheme";

const theme = getTheme();

export const Wrapper = styled.div`
    border-left: 1px solid ${theme.background.secondary};
    border-right: 1px solid ${theme.background.secondary};
    width: 80%;
    min-height: 100vh;
    margin: auto;
`;

export const InsideWrapper = styled.div`
    padding: 30px;
`;

export const ProfileName = styled.div`
    color: ${theme.text.primary};
    font-style: italic;
    font-family: "Verdana";
    padding-bottom: 10px;
`;

export const FlagImage = styled.img`
    max-height: 24px;
    margin-right: 10px;
`;

export const Name = styled.div`
    font-size: 48px;
    margin-top: -24px;
`;

export const UnderName = styled.div`
    font-size: 15px;
    white-space: nowrap;
`;

export const FlagNameGroup = styled.div`
    display: inline-flex;
    height: 48px;
`;

export const Statistics = styled.div`
    text-align: right;
    width: 100%;
`;

export const GeneralStatistics = styled.div`
    font-size: 15px;
    border-bottom: 1px dashed ${theme.background.secondary};
    padding: 5px;
    display: inline-flex;
    width: 100%;
`;

export const LogoutSwitchThemeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const Id = styled.div`
    font-size: 15px;
    font-style: italic;
    font-family: "Verdana";
    color: ${theme.text.primary};
    margin: 0 auto;
    width: 75%;
`;

export const LogoutSwitchButton = styled.div`
    height: 15px;
    font-style: normal;
    min-width: 90px;
    color: ${theme.text.secondary};
    background: ${theme.primary};
    margin: 5px;
    font-size: 12px;
    text-align: center;
    padding: 5px;
    font-family: "Verdana";
    cursor: pointer;
    &:hover {
        filter: brightness(${theme.brightness.lighter});
    }
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const Description = styled.div`
    border-left: 1px solid ${theme.background.secondary};
    font-family: "Verdana";
    font-size: 14px;
    color: ${theme.text.primary};
    max-width: 500px;
    padding: 10px;
    margin-bottom: 40px;
    margin-top: 20px;
    padding-right: 30px;
    overflow-wrap: break-word;
`;

export const SubmitMessage = styled.div`
    font-family: "Verdana";
    color: ${theme.status.negative};
    font-size: 10px;
`;

export const Select = styled.select`
    width: 200px;
`;

export const ClickMe = styled.div`
    font-size: 9px;
    color: grey;
    width: 100%;
    text-align: right;
`;

export const DataBoxWrapper = styled.div`
    margin: 0 auto;
`;

export const ChartsWrapper = styled.div`
    flex-wrap: wrap;
    display: inline-flex;
    width: 100%;
`;
export const ChartAndTitleWrapper = styled.div`
    margin: auto;
    text-align: center;
`;

export const ChartName = styled.div`
    font-size: 20px;
    color: ${theme.text.primary};
    margin: auto;
    text-align: center;
    font-family: "Verdana";
    padding-top: 15px;
`;

export const ChartNamesWrapper = styled.div`
    width: 100%;
    border-top: 1px dashed ${theme.background.secondary};
    display: inline-flex;
`;
