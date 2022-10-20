import MainView from "../components/MainView";

let connected = false;

export default function Home() {
  return (
    <div className="app">
      {connected ? (
        <MainView/>
      ) : (
        <div className="loginContainer">
          <div className="loginTitle">Log in </div>
          <div className="loginSubTitle">
            Manage your account check notifications,comment on videos,more
          </div>
        </div>
      )}
    </div>
  );
}
