import PropTypes from 'prop-types';
import './styles.css';

export const PostCard = ({ title, cover, body, id }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>
          {title} {id}
        </h2>
        <h4>{body}</h4>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
