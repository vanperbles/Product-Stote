import { Box, useColorModeValue } from "@chakra-ui/react"
import NavBar from "./controllers/navBar"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import CreatePage from "./pages/createPage"


function App() {
  

  return (
    
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")} >
      {<NavBar/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
    
  );
}

export default App
