import styled from 'styled-components';

export const StatisticSection = styled.section``;
export const Title = styled.h2`
text-align: center;
text-transorm: uppercase;
color: background: ${p => p.theme.colors.primary};
`;
export const StatisticList = styled.ul`
list-style: none;
display: flex;
align-items:center;
justify-content:center;
margin-bottom: ${p => p.theme.space[4]}px;
margin-top: ${p => p.theme.space[4]}px;
padding:${p => p.theme.space[4]}px;

`;
export const ListItem = styled.li`
padding:${p => p.theme.space[5]}px;
background: ${p => p.theme.colors.background};
border: ${p => p.theme.borders.normal};
border-color: ${p => p.theme.colors.white};
`;
export const ItemSpan = styled.span`
display:block;
font-weight: ${p => p.theme.fontWeights.bold}
`;

