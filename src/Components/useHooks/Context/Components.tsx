import { useUserContext } from './context';

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  const user = useUserContext();
  return (
    <div>
      <div>{user.name}</div>
      <div>Attendance: {user.isPresent ? 'True': 'False'}</div>
    </div>
  );
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const user = useUserContext();

  return <div>{user.name} has come to work today!</div>;
}