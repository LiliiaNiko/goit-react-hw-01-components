import styled from 'styled-components';

export const TransTable = styled.table`
table-layout: fixed;
width: 600px;
margin: auto;
border-collapse: collapse;
border: 1px solid silver;
`;
export const TableHeaderItem = styled.th`
padding: ${p => p.theme.space[3]}px;
text-align: center;
color: ${p => p.theme.colors.white};
text-transform: uppercase;
border: 1px soloid grey;
`;

export const TableBodyItem = styled.td`
text-align: center;
padding: ${p => p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.m};
color: ${p => p.theme.colors.primary};
`;

export const TableHeader = styled.thead`
background: ${p => p.theme.colors.secondary};
padding: ${p => p.theme.space[3]}px;
`;

export const TableHeaderItemWrap = styled.tr`
background: 'silver';
border: 1px soloid 'grey';
`;