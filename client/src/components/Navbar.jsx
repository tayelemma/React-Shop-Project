import { Badge } from "@mui/icons-material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React,{useState} from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
// padding :10px 20px 
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid gray;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;

`;

const Logo = styled.h1`
  font-weight: bold;
 
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const [searchTerm, setSearchTerm]= useState("");
  const quantity = useSelector(state=>state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input  />
            {/* <Input  type ="text" placeholder="Search..."  onChange={(event)=>setSearchTerm(event.target.value)}/> */}
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>@fashion</Logo>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <ShoppingCartIcon />
              <span
                style={{
                  color: "white",
                  padding: "10px",
                  borderRadius: "50px",
                  background: "darkorchid",
                }}
              >
                {" "}
                {quantity}
              </span>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
