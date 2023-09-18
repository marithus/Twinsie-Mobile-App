import React from 'react';
import renderer from 'react-test-renderer';

import "./components/UserList.js"

describe('<UserList />', () => {
    it('should match snapshot', ()=> {
        const snap = renderer.create(<UserList/>).toJSON();
        expect(snap).toMatchSnapshot();
    });
});
