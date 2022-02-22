import React, { lazy, Suspense } from 'react';

const SubAAppLazy = lazy(() => import('./SubAApp'));
const SubBAppLazy = lazy(() => import('./SubBApp'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <h1>I am the host React Application</h1>
    <hr />
    <SubAAppLazy />
    <hr />
    <SubBAppLazy />
  </Suspense>
);

export default App;
