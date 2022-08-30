import styled from "styled-components";

export const StyledLabel = styled.label`
display: flex;
flex-direction: column;
font-weight: ${p=>p.theme.fontWeights.semiBold};
`

export const StyledInput = styled.input`
        margin-top: ${p => p.theme.space[3]}px;
        max-width: 200px;
`