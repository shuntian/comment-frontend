import { useNavigate, useParams } from 'react-router-dom';
const WrapComps = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const Element = props.el;
  return <Element params={params} navigate={navigate} {...props} />
}

export default WrapComps;
