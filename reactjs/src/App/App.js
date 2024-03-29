// Copyright 2020 Paul Sitoh
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// React components
import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';

import {
    MainLayout,
    Dashboard,
} from '../pages';

const App = () => {
    const mystyle={
        root:{
            backgroundColor:'Red'
        }
    };

    return (
        <div>
            <Router>
                <MainLayout style={mystyle}>
                    <Dashboard/>
                </MainLayout>
            </Router>
        </div>
    );
};

export default App;