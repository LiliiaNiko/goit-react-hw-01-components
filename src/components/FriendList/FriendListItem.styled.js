import styled from 'styled-components';

export const FriendItem = styled.li`
display:flex;
width: 400px;
align-items: center;
margin-bottom: ${p => p.theme.space[4]}px;
padding: ${p => p.theme.space[4]}px;
border: 1px solid silver;
border-radius: ${p => p.theme.radii.md};
box-shadow: 1px 3px 9px 4px rgba(145,145,145,0.98);
`;

export const OnlineStatus = styled.span`
display: block;
width: 15px;
height: 15px;
margin-right: ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.round};
background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red'}
};
`;

export const FriendName = styled.p`
margin-left: ${p => p.theme.space[4]}px;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.l};
`;