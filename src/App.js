import logo from "./logo.svg";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div>
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Address></Address>
    </div>
  );
}

export default App;
