import PropTypes from 'prop-types';
import { PostCard } from '../PostCard';
import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} cover={post.cover} title={post.title} id={post.id} body={post.body} />
    ))}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
