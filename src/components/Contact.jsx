import { Link, Outlet } from 'react-router-dom';

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    <ul>
      <li><Link to="us">Contact US</Link></li>
      <li><Link to="pl">Contact PL</Link></li>
      <li><Link to="de">Contact DE</Link></li>
    </ul>
    <Outlet />
  </div>
);

export default Contact;