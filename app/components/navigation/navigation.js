import styled from "styled-components";
// import Link from "next/link";

const Navigation = styled.nav`
  width: 60%;
  height: 100%;
`;
const Menu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
`;
const Menuitem = styled.li`
  margin: 0 30px;
`;
const Menuitemlink = styled.a`
color:white;
`;
const arr=["Home","About","Work","Contact"]
const Nav = () => {
  return (
    <Navigation>
      <Menu>
        {
            arr.map(n=>{
              return(
                <Menuitem>
                  <Menuitemlink href="/">{n}</Menuitemlink>
                </Menuitem>
              )
            })
        }
      </Menu>
    </Navigation>
  );
};
export default Nav;

