import React from 'react';
import {RiSendPlaneFill} from 'react-icons/ri';

const Contact = () => {
  return (
    <form className='max-w-xs mx-auto'>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Type your name" className="input input-bordered w-full max-w-xs" />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" placeholder="name@example.com" className="input input-bordered w-full max-w-xs" />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea className="textarea textarea-bordered" placeholder="Write your message"></textarea>
      </div>
      <button type='submit' className='btn btn-primary w-full mt-3'>Send <RiSendPlaneFill className='ml-2 text-xl'/></button>
    </form>
  );
};

export default Contact;