import { FaLinkedin, FaGithub} from "react-icons/fa"

const style = { color: "white" }

const socialLinks = [
    {   
        id: 0,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/daan-sijnja-08b296216/",
        icon: <FaLinkedin style={style}/>,
        backgroundColor: "#0077B5",
        fadeColor: "#36392d"
    },
    {   
        id: 1,
        name: "Github",
        link: "https://github.com/DaanSijnja",
        icon: <FaGithub style={style}/>,
        backgroundColor: "#181717",
        fadeColor: "#36392d"
    }    
]

export { socialLinks }