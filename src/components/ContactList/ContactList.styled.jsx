import styled from "styled-components";

export const StyledContactList = styled.ul`
    padding: 0 ${p=>p.theme.space[5]}px;
`;

export const StyledContact = styled.li`
    display: flex;
    position: relative;
    text-align: center;
    padding-left: 15px;
    font-weight: ${p=>p.theme.fontWeights.semiBold};

    :not(:last-child) {
        margin-bottom: ${p=>p.theme.space[3]}px;
    }
    :before {
        content: "";
        width: 7px;
        height: 7px;
        border-radius:50%;
        background-color: black;
        position: absolute;
        top: 6px;
        left: 0;
    };
`;