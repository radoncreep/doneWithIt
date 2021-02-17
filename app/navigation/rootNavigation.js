import React from 'react';

export const navigationRef = React.createRef();

// if you navigate too early the current method is going to return null
const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
};

export default {
    navigate
};