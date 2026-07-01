import Navbar from "../component/Navbar";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
