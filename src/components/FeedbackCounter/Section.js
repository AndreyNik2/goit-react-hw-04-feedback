import PropTypes from 'prop-types';
import {Title} from './Section.styled'

const Section = ({ title, children }) => (
    <section>
        <Title>{title}</Title>
        {children}
    </section>
)

Section.propTypes = {
    title: PropTypes.string
}

export default Section;

