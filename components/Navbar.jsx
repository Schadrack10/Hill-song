import React from "react";
import Link from "next/link";

const container = {
  width: "100%",
  height: "450px",
  background: "url('bg-img.jpg')",
  backgroundSize: "cover",
};
const nav = {
  width: "100%",
  height: "120px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
};
const logo = {
  width: "10%",
};
const linkWrapper = {
  width: "90%",
  padding: "10px",
  display: "flex",
};
const link = {
  width: "120px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "300",
  fontSize: "14px",
  textTransform: "uppercase",
};

const title = {
  fontSize: "12px",
  fontWeight: "200",
  margin: "0 10px",
};
const header = {
    // border:"1px solid red",
    width:"100%",
    height:"150px",
    display:"flex",
    alignItems:"center",
    padding:"0 100px ",
    fontSize:"35px",
    fontWeight:"300",
    color:"#222",
    letterSpacing:"2px"
}






const Navbar = () => {
  return (
    <header style={container}>
      <nav style={nav}>
        <img style={logo} src="logo.svg" alt="logo" />
        <div style={linkWrapper}>
          <div style={link}>Books</div>
          <div style={link}>Music</div>
          <div style={link}>Teaching</div>
          <div style={link}>curriculum</div>
          <div style={link}>apparal</div>
          <div style={link}>Posters</div>
        </div>
      </nav>
      <div style={title}>
        <Link href=""> Home</Link> /<Link href=""> Music</Link> /
        <Link href=""> Worship</Link>
      </div>

      <div style={header}>
      <p>Worship</p>

      </div>

    </header>
  );
};

export default Navbar;
