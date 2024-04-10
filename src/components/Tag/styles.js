import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.2rem;
    padding: .5rem 1.4rem;
    border-radius: 0.5rem;
    margin-right: .6rem;

    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    background: ${({theme}) => theme.COLORS.ORANGE} ;
`