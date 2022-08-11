import PropTypes from 'prop-types';
import { Box } from '../Box'
import { StatisticSection, Title, StatisticList, ListItem, ItemSpan} from './Statistics.styled'

//const Info = ({ text }) => {
    //return <div>{text}</div>
//}

export const Statistics = ({ title = null, stats }) => {
    return (<Box
     p={4}
    ml='auto'
    mr='auto'
    width='500px'
    bg='muted'
    mt={3}>
            <StatisticSection>
        {title && <Title>{title}</Title>}

  <StatisticList>
    {stats.map(item => {
        return (
        <ListItem key={item.id}>
                <ItemSpan>{item.label}</ItemSpan>  
                <ItemSpan>{`${item.percentage}%`}</ItemSpan>        
         </ListItem>
     )   
    })}
  </StatisticList>
</StatisticSection>
        </Box>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}