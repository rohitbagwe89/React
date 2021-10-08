import Navigation from "./AllLAyout";
function Layout(prop) {
  return (
    <div>
      <Navigation></Navigation>
      <div>{prop.children}</div>
    </div>
  );
}

export default Layout;
