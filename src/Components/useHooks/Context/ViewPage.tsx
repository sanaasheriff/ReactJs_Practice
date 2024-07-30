import { Profile, Sidebar } from './Components';

interface ViewPageProps {}

export default function ViewPage({}: ViewPageProps) {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}