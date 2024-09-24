import { useContext } from "react";
import { DashboardContext, useUserContext } from "../context";

export function Sidebar({}: {}) {
  const user = useUserContext();
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.isSubscribed ? 'subscribed' : 'not subscribed'}</div>
    </div>
  );
}

export function Profile({}: {}) {
  const user = useUserContext();
  return (
    <div>
      <div>name: {user.name}</div>
    </div>
  );
}
