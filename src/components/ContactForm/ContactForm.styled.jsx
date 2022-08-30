import styled from "styled-components";

export const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
    max-width: 400px;
    margin: ${p=>p.theme.space[4]}px 0;
    padding: ${p=>p.theme.space[3]}px;
    button {max-width: 90px;}
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p=>p.theme.fontSizes.s};
    font-weight: ${p=>p.theme.fontWeights.semiBold};
`;

export const StyledInput = styled.input`
    font-size: ${p => p.theme.fontSizes.s};
    max-width: 200px;
    margin-top: ${p=>p.theme.space[3]}px;
`