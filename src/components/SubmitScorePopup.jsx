import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import fancyTime from '../utils/fancyTime';
import Dots from './Loading/Dots';

function SubmitScorePopup({
  duration,
  buttonHandlers,
  name,
  sendingScores,
  errorHandlers,
}) {
  const { cancelSubmit, submitScore } = buttonHandlers;
  const { submitError, setSubmitError } = errorHandlers;
  const inputRef = useRef();

  const MAX_LENGTH = 20;

  const checkValidName = (str) => str.length <= MAX_LENGTH;

  const setNameError = (str) => {
    if (str.length > MAX_LENGTH)
      setSubmitError(`Max length is ${MAX_LENGTH} characters`);
    if (str.length === 0) setSubmitError(`Will submit as "Anonymous"`);
  };

  const handleChange = (e) => {
    const newName = e.target.value;
    if (checkValidName(newName)) {
      setSubmitError(null);
      name.setUsername(newName);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitScore();
  };

  useEffect(() => {
    setNameError(name.username);
  }, [name.username]);

  return (
    <>
      <div className='popup-background' />

      <div className='score-submit-popup'>
        <div className='score-message'>
          You finished in{' '}
          <span className='score-time'>{fancyTime(duration)}s</span>
        </div>
        {submitError && <div className='score-submit-error'>{submitError}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor='input-username'>
            Enter a name to submit score
            <input
              ref={inputRef}
              id='input-username'
              type='text'
              value={name.username}
              onChange={handleChange}
              maxLength={MAX_LENGTH}
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
            <button
              type='submit'
              className={sendingScores ? 'btn-submit loading' : 'btn-submit'}
            >
              {sendingScores ? (
                <div className='dots'>
                  <Dots />
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
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
    setUsername: PropTypes.func,
  }).isRequired,
  sendingScores: PropTypes.bool.isRequired,
  errorHandlers: PropTypes.shape({
    submitError: PropTypes.string,
    setSubmitError: PropTypes.func,
  }).isRequired,
};

export default SubmitScorePopup;
