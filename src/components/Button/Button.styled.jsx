import styled from "styled-components";

const StyledButton = styled.button`
    font-size: ${p => p.theme.fontSizes.xs};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    text-transform: capitalize;
    background-color: ${p => (p.children !== "reset" ? p.theme.colors.background : p.theme.colors.red)};
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.sm};
    padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
    opacity: 0.6;
    cursor:pointer;

    :hover { opacity:1; }
    :active { background-color: ${p => p.theme.colors.blue}; }

    transition: opacity 200ms ease-in;
`;

export {StyledButton}