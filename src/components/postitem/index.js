import React from 'react';
import Vader from '../../assets/Darth.jpg'
import Sidios from '../../assets/sidios.jpeg'



 function PostHeader() {
  return (
    <div className="post-header">
      <img className="avatar" src={Vader} />
      <div className="details">
        <span>Darth Vader Silva dos Santos</span>
        <span>08/05</span>
      </div>
    </div>
    );
}

 function PostComments() {
  return (
    <div className="post-comments">
      <div className="divider" />
      
        <div className="comment">
          <img className="avatar" src={Sidios} />
          <p>
            <span>sidios</span>
            vamo matar o luke quando?
          </p>
        </div>
    </div>
  );
}


export default function PostItem() {
  return (
    <div className="post">
      <PostHeader />
      <p className="post-content">um comentario qualquer ai</p>
      <PostComments  />
    </div>  );
}
