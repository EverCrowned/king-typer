import styled from "@emotion/styled";
import { getTheme } from "../../../utils/getTheme";

// Style file that contains the styled components for the navbar

const theme = getTheme();

export const Fix = styled.div`
    width: 100%;
`;

export const Ul = styled.ul`
    font-family: "Verdana";
    font-size: 18px;

    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${theme.primary};
    display: inline-flex;
    width: 100%;
`;
export const Li = styled.li`
    a {
        display: block;
        color: ${theme.text.secondary};
        text-align: center;
        padding: 18px 28px;
        text-decoration: none;
        height: 18px;
    }

    a:hover {
        border-top: 2px solid ${theme.background.primary};
        height: 20px;
        padding-top: 14px;
        background-color: ${theme.primary};
        filter: brightness(${theme.brightness.lighter});
    }
`;
