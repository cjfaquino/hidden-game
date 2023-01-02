import React from 'react';
import PropTypes from 'prop-types';
import fancyTime from '../utils/fancyTime';

function SubmitScorePopup({ duration, buttonHandlers, name }) {
  const { cancelSubmit, submitScore } = buttonHandlers;

  const handleChange = (e) => {
    name.changeUsername(e.target.value);
  };

  return (
    <>
      <div className='popup-background' />

      <div className='score-submit-popup'>
        <div className='score-message'>
          You finished in{' '}
          <span className='score-time'>{fancyTime(duration)}s</span>
        </div>
        <label htmlFor='input-username'>
          Enter a name to submit score
          <input
            id='input-username'
            type='text'
            value={name.username}
            onChange={handleChange}
            maxLength='20'
          />
        </label>
        <div className='submit-btns'>
          <button
            type='button'
            className='btn-cancel-submit'
            onClick={cancelSubmit}
          >
            Cancel
          </button>
          <button type='button' className='btn-submit' onClick={submitScore}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

SubmitScorePopup.propTypes = {
  duration: PropTypes.number.isRequired,
  buttonHandlers: PropTypes.shape({
    cancelSubmit: PropTypes.func,
    submitScore: PropTypes.func,
  }).isRequired,
  name: PropTypes.shape({
    username: PropTypes.string,
    changeUsername: PropTypes.func,
  }).isRequired,
};

export default SubmitScorePopup;
