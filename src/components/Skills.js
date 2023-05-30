
import PropTypes from 'prop-types';

const Item = ({name}) => {
  return <li name="skill-value">{name}</li>
}

function Skills() {
  return (
    <>
      <section className='container'>
        <h1>Skills Section</h1>
        <ul>
          <Item name="Web Designing"/>
          <Item name="Videography"/>
          <Item name={'Graphic Designer'}/>
        </ul>
      </section>
    </>
  )
}

// Typechecking With PropTypes
Item.propTypes = {
  name: PropTypes.string.isRequired,
};


export default Skills;

