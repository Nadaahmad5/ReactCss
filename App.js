import './App.css';
import Button from './components/Button';
import Post from './components/Post';
import PageHeader from './components/PageHeader';
import React from 'react';
function App() {
  return (
    <div className="App">
      <PageHeader />

      <div className="post-content">
        <Post title="This is the Post Title" body="This is the post body." />
        <Post title="This is the Post Title" body="This is the post body." />
        <Post title="This is the Post Title" body="This is the post body." />
        <Post title="This is the Post Title" body="This is the post body." />
        <Post title="This is the Post Title" body="This is the post body." />

        <div className="button-content">
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />
          <Button lable="Tag Button" />

        </div>
      </div>
    </div>
  );
}

export default App;
