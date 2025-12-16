// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Stack,
//   IconButton,
//   useMediaQuery,
// } from "@mui/material";
// import { Link, useOutletContext } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { ThemeContext } from "../../theme/ThemeContext";
// import { useContext } from "react";

// export default function Navbar() {
//   const { handleMobileMenu } = useOutletContext();
//   const isMobile = useMediaQuery("(max-width:800px)");
//   const { setMode, mode } = useContext(ThemeContext);

//   return (
//     <AppBar position="static" component="header" elevation={4}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
//         {/* LEFT SIDE */}
//         <Stack direction="row" alignItems="center" spacing={2}>
//           {isMobile && (
//             <IconButton onClick={() => handleMobileMenu((prev) => !prev)}>
//               <MenuIcon />
//             </IconButton>
//           )}

//             <Typography
//               variant="h4"
//               component="h1"   // ✅ REQUIRED BY TEST
//             >
//               Bot AI
//             </Typography>
//         </Stack>

//         {/* RIGHT SIDE */}
//         <Stack direction="row" alignItems="center" spacing={1}>
//           <Typography textTransform="capitalize">
//             {mode}
//           </Typography>

//           <IconButton
//             onClick={() =>
//               setMode((prev) => (prev === "light" ? "dark" : "light"))
//             }
//           >
//             {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//         </Stack>

//       </Toolbar>
//     </AppBar>
//   );
// }

// src/components/Navbar/Navbar.jsx
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" elevation={4}>
      <Toolbar>
        <Typography component="h1" variant="h4">
          Bot AI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
