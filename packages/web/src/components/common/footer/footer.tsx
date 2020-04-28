import * as React from "react";

import { Link } from "react-router-dom";

import { FooterStyled } from "./style";

// Footer component

export const Footer = () => {
    return (
        <FooterStyled>
            <a href="https://github.com/Vyctor661/king-typer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
                    <path
                        d="M21.543 34.568c-.054 0 .592 1.367.61 1.367 1.41 2.516 4.128 4.08 8.713 4.513-.654.488-1.44 1.415-1.549 2.486-.823.522-2.478.695-3.764.297-1.803-.56-2.493-4.067-5.192-3.567-.584.108-.468.486.037.809.823.522 1.597 1.178 2.194 2.571.459 1.07 1.423 2.982 4.473 2.982 1.21 0 2.058-.144 2.058-.144s.023 2.731.023 3.793c0 1.225-1.682 1.57-1.682 2.159 0 .232.557.255 1.004.255.884 0 2.723-.726 2.723-1.998 0-1.011.017-4.411.017-5.006 0-1.3.709-1.712.709-1.712s.088 6.941-.169 7.872c-.302 1.094-.847.938-.847 1.427 0 .726 2.214.178 2.948-1.416.567-1.24.319-8.05.319-8.05l.605-.012s.034 3.117.013 4.542c-.021 1.476-.122 3.342.77 4.222.586.578 2.484 1.594 2.484.666 0-.539-1.04-.982-1.04-2.441v-6.715c.831 0 .706 2.208.706 2.208l.061 4.103s-.184 1.494 1.645 2.12c.645.222 2.025.281 2.09-.091.065-.373-1.662-.927-1.678-2.085-.01-.706.032-1.118.032-4.186 0-3.068-.419-4.202-1.88-5.105 4.508-.456 7.299-1.552 8.658-4.487.106.003.555-1.371.496-1.371.305-1.108.47-2.419.502-3.972-.008-4.209-2.058-5.698-2.451-6.397.58-3.187-.098-4.638-.412-5.135-1.162-.406-4.041 1.044-5.615 2.066-2.564-.736-7.986-.666-10.019.19-3.751-2.64-5.736-2.235-5.736-2.235s-1.283 2.26-.339 5.565c-1.234 1.546-2.154 2.64-2.154 5.539 0 1.635.196 3.097.637 4.373zM33.5 1l28.146 16.25v32.5L33.5 66 5.354 49.75v-32.5L33.5 1z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </FooterStyled>
    );
};
