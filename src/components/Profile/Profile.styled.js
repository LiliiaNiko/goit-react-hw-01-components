import styled from 'styled-components';

export const ProfileAvatar = styled.img`
width: 120px;
align-items:center;
display:block;
margin:auto;
border-radius: ${p => p.theme.radii.round}
`;

export const UserName = styled.p`
margin-bottom: ${p => p.theme.space[3]}px;
text-align:center;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
`;
export const UserTag = styled.p`
margin-bottom: ${p => p.theme.space[3]}px;
text-align:center;
color: ${p => p.theme.colors.primary}
`;
export const UserLocation = styled.p`
margin-bottom: ${p => p.theme.space[3]}px;
text-align:center;
`;
export const UserStats = styled.ul`
display: flex;
gap: 32px;
background-color: ${p => p.theme.colors.background};
padding: 36px;
`;
export const StatsItem = styled.li`
`;
export const StatsSpan = styled.span`
display:block;
margin-bottom: ${p => p.theme.space[4]}px;
text-align: center;
;`