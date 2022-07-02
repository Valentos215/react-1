import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="wide-image">
        <img
          alt="HZ"
          src="https://image.shutterstock.com/image-photo/wide-panorama-beautiful-autumn-field-260nw-751127782.jpg"
        ></img>
      </div>
      <div className="user">
        <div className="user-image">
          <img
            alt="HZ"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          ></img>
        </div>
        <div className="user-description">
          <div className="user-name">Vale K.</div>
          <div className="user-data">
            <ul>
              <li>Date of Birth: 18 february</li>
              <li>
                City: <a href="https://google.com">Kiev</a>
              </li>
              <li>
                Education: <a href="https://google.com">KPI</a>
              </li>
              <li>
                Web Site: <a href="https://google.com">https://google.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-posts">
        <div className="posts-title">My posts</div>
        <form className="new-post">
          <p>
            <textarea
              placeholder="your news..."
              className="post-input"
            ></textarea>
          </p>
          <div className="post-button">Send</div>
        </form>
        <div className="posted">
          <div className="post-item">
            <img
              alt="HZ"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZZJGEsXykX9GeTthnveJ9wUsDk-f7izRwg&usqp=CAU"
            ></img>
            <div className="post-text">Hey, why nobody love me?</div>
          </div>
          <div className="post-item">
            <img
              alt="HZ"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZZJGEsXykX9GeTthnveJ9wUsDk-f7izRwg&usqp=CAU"
            ></img>
            <div className="post-text">Are yoy kidding me?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
