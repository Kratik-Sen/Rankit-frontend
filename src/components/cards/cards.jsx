import React, { useEffect, useState, useRef } from 'react';
import Card from './card/card.jsx';
import './cards.css';
import { useSelector, useDispatch } from 'react-redux';
import { compareProfiles as compareProfilesAction } from '../../actions/profiles';

const Cards = () => {
  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  const [currentWinnerIndex, setCurrentWinnerIndex] = useState(null);
  const [contenderIndex, setContenderIndex] = useState(null);
  const isInitialized = useRef(false);

  const getNewRandomIndex = (exclude) => {
    if (profiles.length < 2) return null;
    let idx = Math.floor(Math.random() * profiles.length);
    while (idx === exclude) {
      idx = Math.floor(Math.random() * profiles.length);
    }
    return idx;
  };

  const initializeProfiles = () => {
    if (profiles.length < 2) return;
    const first = Math.floor(Math.random() * profiles.length);
    const second = getNewRandomIndex(first);
    setCurrentWinnerIndex(first);
    setContenderIndex(second);
    isInitialized.current = true;
  };

  useEffect(() => {
    if (profiles.length >= 2 && !isInitialized.current) {
      initializeProfiles();
    }
  }, [profiles.length]);

  const handleSelect = async (selectedIndex) => {
    const winnerId = profiles[selectedIndex]._id;
    const loserId = selectedIndex === currentWinnerIndex
      ? profiles[contenderIndex]._id
      : profiles[currentWinnerIndex]._id;

  
    const prevWinner = currentWinnerIndex;
    const prevContender = contenderIndex;


    const newWinner = selectedIndex;
    const newContender = getNewRandomIndex(newWinner);
    setCurrentWinnerIndex(newWinner);
    setContenderIndex(newContender);

    try {
      await dispatch(compareProfilesAction(winnerId, loserId));
    } catch (err) {
      console.error("Failed to compare profiles:", err);
      // On error, revert to previous state
      setCurrentWinnerIndex(prevWinner);
      setContenderIndex(prevContender);
    }
  };

  if (
    profiles.length < 2 ||
    currentWinnerIndex === null ||
    contenderIndex === null
  ) {
    return <div className="loading-msg">Add at least two profiles to begin the comparison.</div>;
  }

  return (
    <div className="cards">
      <Card
        profile={profiles[currentWinnerIndex]}
        imgSelect={() => handleSelect(currentWinnerIndex)}
      />
      <div className="or">OR</div>
      <Card
        profile={profiles[contenderIndex]}
        imgSelect={() => handleSelect(contenderIndex)}
      />
    </div>
  );
};

export default Cards;

